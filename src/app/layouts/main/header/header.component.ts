import { Component, EventEmitter, OnInit, Output, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/core/services/author-search.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private router: Router, private el: ElementRef, private authorService: AuthorService) {}
  
  searchValue: string ='';
  selectedOption: string ='';
  timeout: any;


  @Output() searchEvent = new EventEmitter<string>();


  onSelectChange(event: Event) {
    this.router.navigate([`${(event.target as HTMLSelectElement).value}`]);
  }
  ngOnInit(){
    const currentUrl = window.location.href;
    const urlParts: string[] = currentUrl.split('/');
    this.selectedOption = urlParts[urlParts.length - 1];
    if(this.authorService.getSearchString() !== ''){
      this.searchValue = this.authorService.getSearchString()
    }
  }
  
  onKeyUp(event: Event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.searchEvent.emit((event.target as HTMLSelectElement).value)
    }, 1000); 
  }
}
