import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicElementsComponent } from './Desks/Desks.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
const routes: Routes = [
  { path: 'basic-elements', component: BasicElementsComponent }
]

@NgModule({
  declarations: [BasicElementsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    ModalModule.forChild(),
    RouterModule.forChild(routes),
  ]
})
export class FormModule { }
