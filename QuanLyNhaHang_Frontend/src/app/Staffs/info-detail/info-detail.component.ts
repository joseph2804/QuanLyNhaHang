import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/Models/food';
import { Table } from 'src/app/Models/table';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodForKitchen } from 'src/app/Models/food-for-kitchen';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.scss']
})
export class InfoDetailComponent implements OnInit {
  @ViewChild('confirmModal', { static: true }) editModal: ModalDirective;
  foods: Food[] = [];
  table: Table[] = [];
  tableId = this.route.snapshot.paramMap.get('id');
  listFood: FoodForKitchen[] = [];
  productId: number;
  message: string;
  listTable: number[] = [];

  constructor(private foodService: FoodService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.loadData();
    this.table = JSON.parse(localStorage.getItem(`table${this.tableId}`) || '[]');
    this.listFood = JSON.parse(localStorage.getItem('listFood') || '[]');
    this.checkStatus();
  }

  loadData() {
    this.foodService.getAll().subscribe(res => {
      this.foods = res;
      this.convertData();
    });
  }

  convertData() {
    this.foods.forEach(function (f) {
      f.foo_Id = f.foo_Id.trim();
    })
  }

  checkExist(id: number): Table {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i].productId == id) {
        return this.table[i];
      }
    }
    return null;
  }

  checkExistByTiming(id: number): FoodForKitchen {

    for (let i = this.listFood.length - 1; i >= 0; i--) {
      if (this.listFood[i]) {

        if (this.listFood[i].productId == id && this.listFood[i].table == this.tableId) {
          let currentTime = new Date();
          let time = new Date(this.listFood[i].time);
          if (currentTime.getTime() - time.getTime() <= 30000) {
            return this.listFood[i];
          }
        }
      }
    }
    return null;
  }

  select(e: any, id: number) {
    e.preventDefault();

    let table = this.checkExist(id);
    let food = this.checkExistByTiming(id);

    // xử lí thông tin gửi đến bếp
    if (food) {
      food.quantity++;
      localStorage.setItem('listFood', JSON.stringify(this.listFood));
    }
    else {
      let aFood: FoodForKitchen = {} as FoodForKitchen;

      this.listFood = JSON.parse(localStorage.getItem('listFood') || '[]');
      this.foodService.getById(id).subscribe(res => {
        aFood.name = res.foo_Name;
        aFood.status = 0;
        aFood.table = this.tableId;
        aFood.time = new Date();
        aFood.timeString = new Date().toLocaleString();
        aFood.quantity = 1;
        aFood.id = parseInt(JSON.parse(localStorage.getItem('idListFood') || '0')) + 1;
        aFood.productId = id;
        this.listFood.push(aFood);
        localStorage.setItem('listFood', JSON.stringify(this.listFood));
        localStorage.setItem('idListFood', JSON.stringify(aFood.id));
      });
    }
    // xử lí hiển thị các món ăn tại trang staff/staffs-info/id
    if (table) {
      table.quantity++;
      table.total = table.price * table.quantity;
      localStorage.setItem(`table${this.tableId}`, JSON.stringify(this.table));
    }
    else {
      this.foodService.getById(id).subscribe(res => {
        let aTable: Table = {} as Table;
        aTable.name = res.foo_Name;
        aTable.price = res.foo_Price;
        aTable.quantity = 1;
        aTable.status = 0;
        aTable.total = res.foo_Price;
        aTable.productId = id;
        this.table.push(aTable);
        localStorage.setItem(`table${this.tableId}`, JSON.stringify(this.table));
      });
    }
  }
  // tăng số lượng
  increase(e: any, id: number) {
    e.preventDefault();
    let table = this.checkExist(id);
    for (let i = this.listFood.length - 1; i >= 0; i--) {
      if (this.listFood[i].productId == id) {
        this.listFood[i].quantity++;
        break;
      }
    }
    table.quantity++;
    table.total = table.price * table.quantity;
    localStorage.setItem('listFood', JSON.stringify(this.listFood));
    localStorage.setItem(`table${this.tableId}`, JSON.stringify(this.table));
  }
  // giảm số lượng
  decrease(e: any, id: number) {
    e.preventDefault();
    let table = this.checkExist(id);

    if (table.quantity > 1) {
      for (let i = this.listFood.length - 1; i >= 0; i--) {
        if (this.listFood[i].productId == id) {
          this.listFood[i].quantity--;
          break;
        }
      }
      table.quantity--;
      table.total = table.price * table.quantity;
      localStorage.setItem('listFood', JSON.stringify(this.listFood));
      localStorage.setItem(`table${this.tableId}`, JSON.stringify(this.table));
    }
  }
  // hủy món khách gọi
  cancel() {
    if (this.productId < 0) {

      localStorage.setItem(`table${this.tableId}`, '');
      this.listTable = JSON.parse(localStorage.getItem('listTable'));
      this.listTable[this.tableId] = 0;
      let j = 0; 
      while ( j < this.listFood.length ) {
        while ( this.listFood[j] != null && this.listFood[j].table == this.tableId ) {
          this.listFood.splice(j, 1);
        }
        j++;
      }
      localStorage.setItem('listFood', JSON.stringify(this.listFood));
      localStorage.setItem('listTable', JSON.stringify(this.listTable));
      this.hideModal();
      this.router.navigate(['user/staffs/staffs-info']);
    }
    else {
      let table = this.checkExist(this.productId);
      let index = this.table.indexOf(table);

      // hủy món ăn gửi đến bếp
      
      for (let i = 0; i < this.listFood.length; i++) {
        if (this.listFood[i].table == this.tableId && this.listFood[i].productId == this.productId) {
          this.listFood.splice(i, 1);
        }
      }
      this.table.splice(index, 1);
      localStorage.setItem('listFood', JSON.stringify(this.listFood));
      localStorage.setItem(`table${this.tableId}`, JSON.stringify(this.table));
    }
    this.hideModal();
  }

  hideModal() {
    this.editModal.hide();
  }

  showModal(e: Event, id: number) {
    e.preventDefault();
    this.editModal.show();
    this.productId = id;
    if (id < 0) {
      this.message = `Bạn muốn hủy bàn ${this.tableId}`;
    }
    else this.message = 'Bạn muốn hủy món';
  }

  checkStatus() {
    for (var i = 0; i < this.table.length; i++) {
      for (var j = 0; j < this.listFood.length; j++) {
        if (this.listFood[j].table == this.tableId && this.table[i].productId == this.listFood[j].productId) {
          this.table[i].status = this.listFood[j].status;
          break;
        }
      }
      if (j >= this.listFood.length) {

        this.table[i].status = 0;
      }
    }
    localStorage.setItem(`table${this.tableId}`, JSON.stringify(this.table));

  }

}
