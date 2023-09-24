import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent{
  @Input() data: any[] = [];
  @Input() pageSize: number = 10;
  @Input() numFound: number = 0;
  @Input() startIndex: number = 0;
  @Output() pageChange = new EventEmitter<number>();


  get totalPages(): number {
    return Math.ceil(this.numFound / this.pageSize);
  }

  get currentPage(): number{
    return isNaN(this.startIndex/this.pageSize + 1) ? 1 : this.startIndex/this.pageSize + 1;
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }
}
