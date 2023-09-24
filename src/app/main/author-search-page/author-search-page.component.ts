import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-author-search-page',
  templateUrl: './author-search-page.component.html',
  styleUrls: ['./author-search-page.component.scss']
})
export class AuthorSearchPageComponent implements OnInit{
  searchString: string ='';
  ngOnInit() {
    
  }
}
