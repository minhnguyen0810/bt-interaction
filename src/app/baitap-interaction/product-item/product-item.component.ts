import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() dienThoai;
  @Output() eventShow = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  hienThi(dienThoai){
    this.eventShow.emit(dienThoai);
  }
}
