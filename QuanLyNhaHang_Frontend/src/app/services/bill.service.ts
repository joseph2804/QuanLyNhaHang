import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Bill, DateToDate } from '../Models/bill';
import { HttpClient } from '@angular/common/http';
import { DetailBill } from '../Models/detail-bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private api: ApiService, private http: HttpClient) { }

  createBill(data: Bill): Observable<Bill> {
    return this.http.post<Bill>(this.api.urls.bill, data);
  }

  getBillById(id: number): Observable<Bill> {
    return this.http.get<Bill>(`${this.api.urls.bill}/${id}`);
  }

  createDetailBill(data: DetailBill): Observable<DetailBill> {
    return this.http.post<DetailBill>(this.api.urls.detailBill, data);
  }

  dateToDate(data: DateToDate): Observable<Bill> {
    return this.http.post<Bill>(this.api.urls.dateToDate, data);
  }
  

}
