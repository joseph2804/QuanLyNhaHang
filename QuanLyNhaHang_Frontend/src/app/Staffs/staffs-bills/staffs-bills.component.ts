import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'src/app/Models/table';
import { DetailBill } from '../../Models/detail-bill';
import { BillService } from 'src/app/services/bill.service';
import { FoodService } from 'src/app/services/food.service';
import { Bill } from 'src/app/Models/bill';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FoodForKitchen } from 'src/app/Models/food-for-kitchen';

@Component({
  selector: 'app-staffs-bills',
  templateUrl: './staffs-bills.component.html',
  styleUrls: ['./staffs-bills.component.scss']
})
export class StaffsBillsComponent implements OnInit {
  @ViewChild('huyMon', { static: true }) editModal: ModalDirective;

  tableId = this.route.snapshot.paramMap.get('id');
  table: Table[] = [];
  cash: number = 0;
  list: number[] = [1, 2, 3, 4];
  timeNow: Date;
  bill: Bill = {} as Bill;
  listTable: number[] = [];
  listFood: FoodForKitchen[] = [];


  constructor(private route: ActivatedRoute, private router: Router, private billService: BillService, private foodService: FoodService) { }

  ngOnInit() {
    //lấy dữ liệu bàn ăn theo id từ localStorage
    this.table = JSON.parse(localStorage.getItem(`table${this.tableId}`));
    this.totalCash();

  }
  //tính tổng tiền
  totalCash() {
    this.table.forEach(x => {
      this.cash += x.total;
    })
  }

  select(e: any) {
    console.log(e);
    //this.router.navigate([`/staffs/staffs-info/${id}`]);
  }

  pay() {

    //tạo bill 
    this.bill = {
      detailExportOrders: null,
      discount: 0,
      employee: null,
      epl_Id: 1,
      exp_Date: this.timeNow,
      id: 0,
      exp_Status: 1,
      exp_Total: this.cash,
      tab_Id: parseInt(this.tableId),
      table: null
    }

    this.billService.createBill(this.bill).subscribe(res => {
      // tạo detail bill
      console.log(res);
      for (let i = 0; i < this.table.length; i++) {
        let aDetailBill: DetailBill = {} as DetailBill;
        let t = this.table[i];
        aDetailBill.exp_Id = res.id;
        aDetailBill.foo_Id = t.productId;
        aDetailBill.quantity = t.quantity;
        aDetailBill.deExp_Status = 1;
        this.billService.createDetailBill(aDetailBill).subscribe(res => {
          console.log(res);
        });
      }
    });

    this.resetTable();
    this.hideModal();
    this.router.navigate(['user/staffs/staffs-info']);
  }

  hideModal() {
    this.editModal.hide();
  }

  showModal() {
    this.editModal.show();
  }
  // trả lại trạng thái chưa có khách cho bàn
  resetTable() {
    this.listTable = JSON.parse(localStorage.getItem('listTable') || '[]');
    this.listFood = JSON.parse(localStorage.getItem('listFood') || '{}');
    let id = this.listTable.indexOf(parseInt(this.tableId));
    this.listTable[id] = 0;
    localStorage.setItem('listTable', JSON.stringify(this.listTable));
    localStorage.setItem(`table${this.tableId}`, '');
    let i = 0;
    while (i < this.listFood.length) {
      while (this.listFood[i] != null && this.listFood[i].table == this.tableId) {
        this.listFood.splice(i, 1);
      }
     
      i++;
    }
    localStorage.setItem('listFood', JSON.stringify(this.listFood));
  }

}
