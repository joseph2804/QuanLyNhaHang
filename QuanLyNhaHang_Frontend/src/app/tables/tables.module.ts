import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from './Employees/Employees.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from "ngx-bootstrap/modal";
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  { path: 'basic-table', component: BasicTableComponent }
]

@NgModule({
  declarations: [BasicTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ModalModule.forChild(),
    RouterModule.forChild(routes),
  ]
})
export class TablesModule { }
