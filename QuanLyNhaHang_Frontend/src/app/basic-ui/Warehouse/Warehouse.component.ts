import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { warehouse } from 'src/app/models/datatypes';
import { Router } from '@angular/router';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-modals',
  templateUrl: './Warehouse.component.html',
  styleUrls: ['./Warehouse.component.scss']
})
export class ModalsComponent implements OnInit {

  aWarehouse : warehouse = {} as warehouse;
  constructor(private modalService: NgbModal , private router:Router , private warehouseService : WarehouseService) {}

  warehouse : warehouse[] = [];
  ngOnInit() : void{
    this.loadData();
  }

  loadData(){
    this.warehouseService.getAll().subscribe(res => {
      this.warehouse = res.data;
    });
  }


}
