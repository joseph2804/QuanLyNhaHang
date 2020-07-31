import { Component, OnInit, ViewChild } from '@angular/core';
import { order } from 'src/app/models/datatypes';
import { OrderService } from 'src/app/services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './Orders.component.html',
  styleUrls: ['./Orders.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  message: string;
  action : string;
  aOrder : order = {} as order;

  constructor(private orderService : OrderService, private router : Router, private route : ActivatedRoute) { }

  @ViewChild('editModal', { static: false }) editModal: ModalDirective;

  order : order[] = [];
  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.orderService.getAll().subscribe(res => {
      this.order = res.data;
    });
  }

  searchData(id : number){
    this.orderService.get(id).subscribe(res => {
      this.aOrder = res.data;
    });
  }

  delete(id : number){
    this.orderService.delete(id).subscribe(res => {
      this.loadData();
    });
  }

  hidemodal(){
    this.editModal.hide();
    this.loadData();
  }

  showmodal(id : number){
    this.editModal.show();
    if(id===0)
    {
      this.action = 'Thêm';
      this.aOrder = {id : 0} as order;
    }else{
      this.action = 'Cập nhập';
      this.orderService.get(id).subscribe(res =>{
        this.aOrder = res.data;
      });
    }
  }

  save(){
    if(this.aOrder.id === 0)
    {
      this.orderService.add(this.aOrder).subscribe(res => {
        this.hidemodal();
        this.loadData();
      });

    }else{
      this.orderService.update(this.aOrder).subscribe(res => {
        this.hidemodal();
        this.loadData();
      });
    }
  }

}
