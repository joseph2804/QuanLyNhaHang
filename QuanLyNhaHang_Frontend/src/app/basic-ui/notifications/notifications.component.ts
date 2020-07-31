import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { food, type, employee } from 'src/app/models/datatypes';
import { FoodService } from 'src/app/services/food.service';
import { TypeService } from 'src/app/services/type.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  @ViewChild('alertModal', { static: false }) alertModal: ModalDirective;

  message: string;
  action : string;
  aType : type = {} as type;
  aFood : food = {} as food;
  aEmployee : employee = {} as employee;
  id : number;
  // data : Array<employee>;
  totalRecords : number;
  Page : number = 1;
  constructor(private route : ActivatedRoute ,
    private router : Router ,
    private foodService : FoodService,
    private typeService : TypeService,
    private employeeService : EmployeeService
    ) {
  }

  type : type[] = [];
  food : food[] = [];
  employee : employee[] = [];

 ngOnInit() {
   this.loadData();
   this.loadType();
   this.loadEmployee();
  console.log(this.food);
 }
  loadData(){
    this.foodService.getAll().subscribe(res => {
      this.food = res;
      this.totalRecords = res.length;
      this.convertData();
    });
  }

  convertData() {
    this.food.forEach(function (f) {
      f.foo_Id = f.foo_Id.trim();
    })
  }

  loadEmployee(){
    this.employeeService.getAll().subscribe(res => {
      this.employee = res;
    });
  }
  loadType(){
    this.typeService.getAll().subscribe(res => {
      this.type = res;
      console.log(this.type);
    });
  }

  hidemodal(){
    this.editModal.hide();
  }

  showmodal(id : number){
    if(id===0)
    {
      this.action = 'Thêm';
      this.aFood = {id : 0} as food;
      this.aType = {id : 0} as type;
      this.editModal.show();
   //   this.loadData();

    }else{
      this.action = 'Cập nhập';
      this.foodService.get(id).subscribe(res =>{
      console.log(res);
      this.aFood = res;
      this.editModal.show();
    //  this.loadData();
      });
    }
  }

  save(idType : number , ipEmploy : number){
    this.aFood.ty_Id = idType;
    this.aFood.epL_Id = ipEmploy;
    if(this.aFood.id == 0)
    {
      this.foodService.add(this.aFood).subscribe(res => {
        this.editModal.hide();
        this.loadData();
      });
    }else{
      console.log(this.aFood);
      this.foodService.update(this.aFood).subscribe(res => {
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
      this.foodService.get(id).subscribe(res =>{
        this.aFood = res;
      });
      this.alertModal.show();
  }

  saveDelete(){
    this.aFood.foo_Status = false;
    this.foodService.update(this.aFood).subscribe(res => {
      this.alertModal.hide();
      this.loadData();
    });
  }

}
