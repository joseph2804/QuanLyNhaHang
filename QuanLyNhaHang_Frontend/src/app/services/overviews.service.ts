import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { RootObject } from '../models/root-object';
import { Observable } from 'rxjs';
import { employee, exportorder, dateToDate, detailExportOrders } from '../models/datatypes';

@Injectable({
  providedIn: 'root'
})
export class OverviewsService {

  constructor(private http : HttpClient , private api: ApiService ) { }

  getAll(): Observable<[employee]> {
    /*get api */
    return this.http.get<[employee]>(this.api.urls.Overview);
  }

  get(id: number): Observable<employee> {
    return this.http.get<employee>(`${this.api.urls.merchandises}/${id}`);
  }
  getCountTable():Observable<number>{
    return this.http.get<number>(this.api.urls.countTable);
  }
  getCountTableWK():Observable<number>{
    return this.http.get<number>(this.api.urls.countWkTable);
  }

  getTotal(): Observable<number>{
    return this.http.get<number>(this.api.urls.total);
  }

  getExport(): Observable<exportorder>{
    return this.http.get<exportorder>(this.api.urls.exportOrder);
  }

  getExportOrder(id: number): Observable<exportorder> {
    return this.http.get<exportorder>(`${this.api.urls.exportOrder}/${id}`);
  }

  getDetail(id : number): Observable<detailExportOrders>{
    return this.http.get<detailExportOrders>(`${this.api.urls.detailExport}/${id}`);
  }

  sumDateToDate(dateToDate : dateToDate): Observable<number>{
    return  this.http.post<number>(this.api.urls.sumDateToDate, dateToDate);
  }

  listDateToDate(dateToDate : dateToDate): Observable<[exportorder]>{
    return this.http.post<[exportorder]>(this.api.urls.listDateToDate, dateToDate);
  }
}
