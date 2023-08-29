import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SizePaginator } from '../../types';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

  @Input() length: number = 50
  @Input() pageSize: number = 10
  @Input() pageSizeOptions: number[] = [10,25,40]
  @Input() showPageSizeOptions: boolean = true
  @Input() lowValue = 0
  @Input() highValue = 10

  @Output() changeSize = new EventEmitter();

  public getPaginatorData(event: PageEvent) {
    this.changeSize.emit(event)
  }

}
