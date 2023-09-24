import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './book-list/book-list.component';
import { MatIconModule } from '@angular/material/icon';
import { BookCardComponent } from './book-card/book-card.component';
import { FormsModule } from '@angular/forms';
import { AuthorListComponent } from './author-list/author-list.component';
import { MatTableModule } from '@angular/material/table';
import { NgxsModule } from '@ngxs/store';
import { AuthorsState } from 'src/app/core/store';
import { PaginationComponent } from './pagination/pagination.component';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { NoResultsFoundComponent } from './no-results-found/no-results-found.component';
export const COMPONENTS = [
  HeaderComponent,
  BookListComponent,
  BookCardComponent,
  AuthorListComponent,
  PaginationComponent,
  SpinnerComponent,
  NoResultsFoundComponent
];
@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    NgxsModule.forRoot(AuthorsState),
    RouterModule,
    MatProgressSpinnerModule
  ]
})
export class LayoutsMainModule { }
