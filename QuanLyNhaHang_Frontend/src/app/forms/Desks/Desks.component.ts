import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TableService } from 'src/app/services/table.service';
import { ActivatedRoute, Router } from '@angular/router';
import { table, employee } from 'src/app/models/datatypes';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-basic-elements',
  templateUrl: './Desks.component.html',
  styleUrls: ['./Desks.component.scss']
})
export class BasicElementsComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  @ViewChild('alertModal', { static: false }) alertModal: ModalDirective;

  message: string;
  action : string;
  aTable : table = {} as table;
  aEmployee : employee = {} as employee;
  id : number;
  // data : Array<employee>;
  totalRecords : number;
  Page : number = 1;
  constructor(private route : ActivatedRoute ,
    private router : Router ,
    private tableService : TableService ,
    private employeeservice : EmployeeService
    ) { }
  table : table[] = [];
  employee : employee[] = [];
  ngOnInit() : void {
    this.loadData();
  }

  loadData(){
    this.tableService.getAll().subscribe(res => {
      this.table = res;
      console.log(this.table);
      this.totalRecords = res.length;
    });
  }

  hidemodal(){
    this.editModal.hide();
  }

  showmodal(id : number){
    if(id===0)
    {
      this.action = 'Thêm';
      this.aTable = {id : 0} as table;
      this.editModal.show();
      this.loadData();

    }else{
      this.action = 'Cập nhập';
      this.tableService.get(id).subscribe(res =>{
      console.log(res);
      this.aTable = res;
      this.editModal.show();
      this.loadData();

      });
    }
  }

  save(){
    if(this.aTable.id == 0)
    {
      this.tableService.add(this.aTable).subscribe(res => {
        this.editModal.hide();
        this.loadData();
      });
    }else{
      console.log(this.aTable);
      this.tableService.update(this.aTable).subscribe(res => {
        this.editModal.hide();
        this.loadData();
      });
    }
  }

  hideAlertModal(){
    this.alertModal.hide();
  }

  showAlertmodal(id : number){
      this.action = 'Xóa';
      this.tableService.get(id).subscribe(res =>{
        this.aTable = res;
      });
      this.alertModal.show();
  }

  saveDelete(){
    this.aTable.tab_Status = false;
    this.tableService.update(this.aTable).subscribe(res => {
      this.alertModal.hide();
      this.loadData();
    });
  }

}
