import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  danhSachDienThoai = [
    { maDT: 1, tenDT: "Iphone X", mota: "Iphone X fearture a new all screen design.Face ID,which makes your face your password",gia:1000, hinhAnh: "assets/images/sp_iphoneX.png" },
    { maDT: 2, tenDT: "Galaxy Note 7", mota: "Galaxy Note 7 comes with a perfectly symetricial design for good reason",gia:2000, hinhAnh: "assets/images/sp_note7.png" },
    { maDT: 3, tenDT: "Vivo", mota: "A young global smartphone brand focusing on introducing perfect sound quality",gia:3000, hinhAnh: "assets/images/sp_vivo850.png" },
    { maDT: 4, tenDT: "Blackberry", mota: "Blackberry is a line of smartphones tablets and services originally desinged",gia:4000, hinhAnh: "assets/images/sp_blackberry.png" },
  ];
  dienthoai:{
    maDT,tenDT,mota,hinhAnh,gia
  };
  constructor() { }
  ngOnInit() {
  }
  hienra(dt){
    this.dienthoai = {
      maDT : dt.maDT,
      tenDT : dt.tenDT,
      mota : dt.mota,
      hinhAnh : dt.hinhAnh,
      gia : dt.gia,
    }
  }
}
