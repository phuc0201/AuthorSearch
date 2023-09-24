import { Component, Input, OnChanges, OnInit, SimpleChanges, ElementRef } from '@angular/core';
import { AuthorSearch } from 'src/app/core/models/AuthorSearch.model';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthorState } from 'src/app/core/store';
import { SearchAuthors } from 'src/app/core/store/action/author.action';
import { AuthorDetailState } from 'src/app/core/store/state/author-detail.state';
import { AuthorDetail } from 'src/app/core/models/AuthorDetail.model';
import { GetAuthorDetail } from 'src/app/core/store/action/author-detail.action';
import { AuthorService } from '../../../core/services/author-search.service';
import { format } from 'date-fns';
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
})
export class AuthorListComponent implements OnInit, OnChanges {
  constructor(private elementRef: ElementRef, private store: Store, private authorService: AuthorService) {}

  currPage: number = 1;
  limit: number = 10;
  offset: number = 0;
  authorsData!: AuthorSearch;
  authorDetail!: AuthorDetail;
  isVisible: boolean = false;
  loading: boolean = true;
  timeout: any;

  @Input() searchString: string = '';
  
  displayedColumns: string[] = ['id', 'name', 'birth_date', 'death_date', 'top_work', 'work_count', 'handle'];

  @Select(AuthorState.getAuthors) authorSearch$!: Observable<AuthorSearch>;
  @Select(AuthorDetailState.getAuthorDetail) authorDetail$!: Observable<AuthorDetail>

  ngOnChanges(changes: SimpleChanges){
    if(changes['searchString'].currentValue && changes['searchString'].currentValue!==this.authorService.getSearchString()){
      this.currPage = 1;
      this.search(this.searchString);
    }
  }
  ngOnInit(): void{
    this.authorsData = new AuthorSearch();
    this.authorsData.docs = []
    this.currPage = 1;
    this.search(this.authorService.getSearchString())
  }

  get changeOffset(): number {
    return this.offset + (this.currPage - 1)*10;
  }

  search(searchValue: string) {
    this.scrollToElement();
    this.loading = true
    if(searchValue !== '')
      this.authorService.setSearchString(searchValue)
    this.searchString = searchValue;
    this.store.dispatch(new SearchAuthors(searchValue, this.limit, this.changeOffset));
    this.authorSearch$.forEach(item=>{
      this.authorsData = item
    })
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if(this.authorsData){
        this.loading = false
      }
    }, 400);
  } 

  onPageChange(currP: number){
    this.currPage = currP;
    this.search(this.searchString);
  }
  displayAuthorDetail(key: string){
    this.store.dispatch(new GetAuthorDetail(key));
    this.authorDetail$.subscribe((authorDetail: AuthorDetail)=>{
      this.authorDetail = authorDetail;
      this.isVisible = true;
    })
  }
  authorPhoto(key: string): string{
    return this.authorService.searchAuthorPhoto(key);
  }
  handleClose(): void {
    this.isVisible = false;
  }
  formatDate(date: string): string{
    return format(new Date(date), 'dd/MM/yyyy') || '';
  }
  scrollToElement() {
    const element = this.elementRef.nativeElement.querySelector('table');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
