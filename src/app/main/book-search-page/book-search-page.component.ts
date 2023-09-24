import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-search-page',
  templateUrl: './book-search-page.component.html',
  styleUrls: ['./book-search-page.component.scss']
})
export class BookSearchPageComponent {
  @Input() searchString: string = '';
}
