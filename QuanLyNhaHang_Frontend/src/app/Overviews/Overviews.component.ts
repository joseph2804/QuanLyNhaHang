import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { employee, dateToDate, exportorder, detailExportOrders } from 'src/app/models/datatypes';
import { Router } from '@angular/router';
import { OverviewsService } from 'src/app/services/overviews.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './Overviews.component.html',
  styleUrls: ['./Overviews.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;

  message: string;
  action : string;
  aDetail : detailExportOrders = {} as detailExportOrders;
  aEmployee : employee = {} as employee;
  aExportorder : exportorder = {} as exportorder;
  aDateTo : dateToDate = {} as dateToDate;
  constructor(private modalService: NgbModal , private router:Router , private overviewService : OverviewsService) {}
  exportorder : exportorder[] = [];
  detailExport : detailExportOrders[] = [];
  dateTo: dateToDate [] = [];
  employee : employee[] = [];
  countTB : number = 0;
  CountWkTB : number = 0;
  Total : number = 0;
  SumDateToDate : number = 0;

  ngOnInit() : void{
    this.loadData();
    this.countTable();
    this.CountWkTable();
    this.loadTotal();
  }

  loadData(){
    this.overviewService.getAll().subscribe(res => {
        this.employee = res;
        console.log(this.employee);
      });
  }

  showList(){
    console.log(this.aDateTo);
    this.overviewService.listDateToDate(this.aDateTo).subscribe(res =>{
      this.exportorder = res;
      console.log(this.exportorder);
    });

    this.overviewService.sumDateToDate(this.aDateTo).subscribe(res =>{
      this.SumDateToDate = res;
      console.log(this.SumDateToDate);
    });
  }

  hidemodal(){
    this.editModal.hide();
  }

  showmodal(id : number){
    if(id===0)
    {
      this.action = 'Thêm';
      this.aExportorder = {id : 0} as exportorder;
      this.editModal.show();
      this.loadData();

    }else{
      this.action = 'Chi tiết hóa đơn';
      this.overviewService.getDetail(id).subscribe(res =>{
      console.log(res);
      this.aDetail = res;
      this.editModal.show();
      this.loadData();

      });
    }
  }

  // sumDate(){
  //   this.overviewService.sumDateToDate(this.aDateTo).subscribe(res =>{
  //     this.SumDateToDate = res;
  //     console.log(this.SumDateToDate);
  //   });
  // }

  loadTotal(){
    this.overviewService.getTotal().subscribe(res =>{
      this.Total = res;
      console.log(this.Total);
    });
  }
  countTable(){
    this.overviewService.getCountTable().subscribe(res =>{
      this.countTB = res;
      console.log(this.countTB);
    });
  }


  CountWkTable(){
    this.overviewService.getCountTableWK().subscribe(res =>{
      this.CountWkTB = res;
      console.log(this.CountWkTB);
    });
  }



}
