import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MerchandisesService } from 'src/app/services/merchandises.service';
import { merchandises } from 'src/app/models/datatypes';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-accordions',
  templateUrl: './Merchandises.component.html',
  styleUrls: ['./Merchandises.component.scss'],
})
export class AccordionsComponent implements OnInit {

  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  @ViewChild('alertModal', { static: false }) alertModal: ModalDirective;

  message: string;
  action : string;
  aMechandises : merchandises = {} as merchandises;
  id : number;
  // data : Array<employee>;
  totalRecords : number;
  Page : number = 1;
  constructor(private route : ActivatedRoute , private router : Router , private  MerchandisesService : MerchandisesService) {
  }
  mechandises : merchandises[] = [];

  ngOnInit() : void {
    this.loadData();
  }

  loadData(){
    this.MerchandisesService.getAll().subscribe(res => {
      this.mechandises = res;
      console.log(this.mechandises);
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
      this.aMechandises = {id : 0} as merchandises;
      this.editModal.show();
      this.loadData();

    }else{
      this.action = 'Cập nhập';
      this.MerchandisesService.get(id).subscribe(res =>{
      console.log(res);
      this.aMechandises = res;
      this.editModal.show();
      this.loadData();

      });
    }
  }

  save(){
    if(this.aMechandises.id == 0)
    {
      this.MerchandisesService.add(this.aMechandises).subscribe(res => {
        this.editModal.hide();
        this.loadData();
      });
    }else{
      console.log(this.aMechandises);
      this.MerchandisesService.update(this.aMechandises).subscribe(res => {
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
      this.MerchandisesService.get(id).subscribe(res =>{
        this.aMechandises = res;
      });
      this.alertModal.show();
  }

  saveDelete(){
    this.MerchandisesService.delete(this.id).subscribe(res => {
      this.loadData();
    });
  }

  // delete(id : number){
  //   this.MerchandisesService.delete(id).subscribe(res => {
  //     this.loadData();
  //   });
  // }
}
