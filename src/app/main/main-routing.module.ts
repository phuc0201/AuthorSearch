import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorSearchPageComponent } from './author-search-page/author-search-page.component';
import { BookSearchPageComponent } from './book-search-page/book-search-page.component';
const routes: Routes = [
  {path: 'author-search', component: AuthorSearchPageComponent},
  {path: 'book-list/:key', component: BookSearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
