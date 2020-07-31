import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';
import { EmployeeService } from 'src/app/services/employee.service';
import {employee } from 'src/app/models/datatypes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-basic-table',
  templateUrl: './Employees.component.html',
  styleUrls: ['./Employees.component.scss']
})
export class BasicTableComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  @ViewChild('alertModal', { static: false }) alertModal: ModalDirective;

  message: string;
  action : string;
  aEmployee : employee = {} as employee;
  id : number;
  // data : Array<employee>;
  totalRecords : number;
  Page : number = 1;
  constructor(private route : ActivatedRoute , private router : Router , private employeeservice : EmployeeService) {
  }
  employee : employee[] = [];

  ngOnInit() : void {
    this.loadData();
  }

  loadData(){
    this.employeeservice.getAll().subscribe(res => {
      this.employee = res;
      console.log(this.employee);
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
      this.aEmployee = {id : 0} as employee;
      this.editModal.show();
      this.loadData();

    }else{
      this.action = 'Cập nhập';
      this.employeeservice.get(id).subscribe(res =>{
      console.log(res);
      this.aEmployee = res;
      this.editModal.show();
      this.loadData();

      });
    }
  }

  save(){
    if(this.aEmployee.id == 0)
    {
      this.employeeservice.add(this.aEmployee).subscribe(res => {
        this.editModal.hide();
        this.loadData();
      });
    }else{
      console.log(this.aEmployee);
      this.employeeservice.update(this.aEmployee).subscribe(res => {
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
      this.employeeservice.get(id).subscribe(res =>{
        this.aEmployee = res;
      });
      this.alertModal.show();
  }

  saveDelete(){
    this.aEmployee.status = false;
    this.employeeservice.update(this.aEmployee).subscribe(res => {
      this.alertModal.hide();
      this.loadData();
    });
  }
}


