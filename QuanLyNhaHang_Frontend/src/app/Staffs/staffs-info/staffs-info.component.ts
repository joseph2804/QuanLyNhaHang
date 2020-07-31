import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/Models/food';
import { Table } from 'src/app/Models/table';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FoodForKitchen } from 'src/app/Models/food-for-kitchen';

@Component({
  selector: 'app-staffs-info',
  templateUrl: './staffs-info.component.html',
  styleUrls: ['./staffs-info.component.css']
})
export class StaffsInfoComponent implements OnInit {
  @ViewChild('confirmModal', { static: true }) editModal: ModalDirective;
  
  //list các bàn đang có khách
  listTable: number[] = [];
  foods: Food[] = [];
  fromTable: Table[] = [];
  toTable: Table[] = [];
  toId: string;
  fromId: number;
  listFood: FoodForKitchen[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit() {

    this.loadData();
    this.listTable = JSON.parse(localStorage.getItem('listTable') || '[]');
    localStorage.setItem('idListFood', '0');
  }

  //lấy dữ liệu món ăn từ api
  loadData() {

    this.foodService.getAll().subscribe(res => {
      this.foods = res;
      console.log(this.foods);
    });
  }

  //thiết lập bàn bắt đầu có khách
  select(id: number): void {

    //kiểm tra id bàn đã có trong listTable hay chưa, listTable lưu id của bàn đã có khách
    if (this.listTable.indexOf(id) < 0) {
      // thêm id bàn vào listTable và tạo ra biến trong localstorage có tên như dưới lưu các món ăn đã gọi trong 1 bàn
      this.listTable[id] = id;
      localStorage.setItem(`table${id}`, '');
      localStorage.setItem('listTable', JSON.stringify(this.listTable));
    }

  }

  move() {
    
    this.listFood = JSON.parse(localStorage.getItem('listFood') || '[]');
    for ( let i = 0; i < this.listFood.length; i++) {
      if ( this.listFood[i].table == this.fromId.toString()) {
        this.listFood[i].table = this.toId;
      }
    }
    this.fromTable = JSON.parse(localStorage.getItem(`table${this.fromId}`) || '[]');
    this.toTable = JSON.parse(localStorage.getItem(`table${this.toId}`) || '[]');
    this.listTable[this.fromId] = 0;
    this.listTable[parseInt(this.toId)] = parseInt(this.toId);
    for ( let i = 0; i < this.fromTable.length; i++) {
      let isExist = false;
      for ( let j = 0; j < this.toTable.length;  j++) {
        let fromTable = this.fromTable[i];
        let toTable = this.toTable[j];
        if (fromTable.productId == toTable.productId) {
          toTable.quantity += fromTable.quantity;
          isExist = true;
          break;
        }
        
      }
      if (!isExist) {
        this.toTable.push(this.fromTable[i]);
        console.log(this.toTable);
      }
    }
    localStorage.setItem(`table${this.toId}`, JSON.stringify(this.toTable));
    localStorage.setItem(`table${this.fromId}`,'');
    localStorage.setItem('listTable', JSON.stringify(this.listTable));
    localStorage.setItem('listFood', JSON.stringify(this.listFood));
    
    this.hideModal();
  }

  hideModal() {
    this.editModal.hide();
  }

  showModal(id: number) {
    this.fromId = id;
    this.editModal.show();
  }

}
