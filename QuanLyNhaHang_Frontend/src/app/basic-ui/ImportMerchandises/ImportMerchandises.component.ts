import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { importmerchandises } from 'src/app/models/datatypes';
import { IpMerchandisesService } from 'src/app/services/ip-merchandises.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './ImportMerchandises.component.html',
  styleUrls: ['./ImportMerchandises.component.scss']
})
export class DropdownsComponent implements OnInit {

  message: string;
  action : string;
  aIpmerchandises : importmerchandises = {} as importmerchandises;
  constructor(private route : ActivatedRoute , private router:Router , private importMerchandisesSV : IpMerchandisesService ) { }

  @ViewChild('editModal', { static: false }) editModal: ModalDirective;

  importmerchandises : importmerchandises[] = [];

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.importMerchandisesSV.getAll().subscribe(res => {
      this.importmerchandises = res;
    });
  }

  delete(id : number){
    this.importMerchandisesSV.delete(id).subscribe(res => {
      this.loadData();
    });
  }

  hidemodal(){
    this.editModal.hide();
  }

  showmodal(id : number){
    if(id===0)
    {
      this.action = 'Add';
      this.aIpmerchandises = {id : 0} as importmerchandises;
      this.loadData();
      this.editModal.show();
    }else{
      this.action = 'Update';
      this.importMerchandisesSV.get(id).subscribe(res =>{
        console.log(res);
        this.aIpmerchandises = res;
        this.editModal.show();
      });
    }
  }

  save(){
    if(this.aIpmerchandises.id == 0)
    {
      this.importMerchandisesSV.add(this.aIpmerchandises).subscribe(res => {
        this.editModal.hide();
        this.loadData();
      });

    }else{
      this.importMerchandisesSV.update(this.aIpmerchandises).subscribe(res => {
        this.editModal.hide();
        this.loadData();
      });
    }
  }

}
