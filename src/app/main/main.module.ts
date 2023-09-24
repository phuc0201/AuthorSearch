import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutsMainModule} from '../layouts/main/main.module'
import { MainRoutingModule } from './main-routing.module';
import { BookSearchPageComponent } from './book-search-page/book-search-page.component';
import { AuthorSearchPageComponent } from './author-search-page/author-search-page.component'
export const COMPONENTS = [
  AuthorSearchPageComponent,
  BookSearchPageComponent
]
@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutsMainModule,
  ],
  exports: COMPONENTS,
})
export class MainModule { }
