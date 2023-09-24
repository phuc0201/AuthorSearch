import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthorWorks } from 'src/app/core/models/AuthorWorks.model';
import { AuthorService } from 'src/app/core/services/author-search.service';
import { AuthorWorksState } from 'src/app/core/store';
import { GetAuthorWorks } from 'src/app/core/store/action/author-works.action';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';
import { WorksEntry } from 'src/app/core/models/WorksEntry.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{
  constructor(private store: Store, private authorService: AuthorService, private route: ActivatedRoute) {}
  AuthorKey: string = '';
  limit: number = 10;
  offset: number = 0;
  link: string = '';
  authorWorks!: AuthorWorks;
  authorWorkDetail!: WorksEntry;
  currPage = 1;
  isVisible = false
  displayedColumns: string[] = ['title', 'key', 'latest_revision', 'revision', 'created', 'last_modified', 'handle'];
  @Select(AuthorWorksState.getAuthorWorks) authorWork$!: Observable<AuthorWorks>

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.AuthorKey = params['key'];
    });
    this.getAuthorWorks(this.AuthorKey, this.limit, this.offset, this.link);
  }
  getAuthorWorks(key: string, limit: number, offset: number, link: string){
    this.store.dispatch(new GetAuthorWorks(key, limit, offset, link))
    this.authorWork$.subscribe((authorWorks: AuthorWorks)=>{
      this.authorWorks = authorWorks;
    })
  }
  get changeOffset(): number {
    return this.offset + (this.currPage - 1)*10;
  }
  formatDate(date: string): string{
    return format(new Date(date), 'dd/MM/yyyy') || '';
  }
  onPageChange(currP: number){
    this.currPage = currP
    this.getAuthorWorks(this.AuthorKey, this.limit, this.changeOffset, '');
  }
  displayBookDetail(workDetail: WorksEntry){
    this.authorWorkDetail = workDetail;
    this.isVisible = true
  }
  handleClose(){
    this.isVisible = false  
  }
}
