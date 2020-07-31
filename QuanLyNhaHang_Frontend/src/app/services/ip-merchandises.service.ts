import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { importmerchandises } from '../models/datatypes';
import { Observable } from 'rxjs';
import { RootObject } from '../models/root-object';

@Injectable({
  providedIn: 'root'
})
export class IpMerchandisesService {

  constructor(private http: HttpClient, private api: ApiService) { }

  getAll(): Observable<[importmerchandises]> {
    /*get api */
    return this.http.get<[importmerchandises]>(this.api.urls.ImportOrder);
  }

  get(id: number): Observable<importmerchandises> {
    return this.http.get<importmerchandises>(`${this.api.urls.ImportOrder}?id=${id}`);
  }

  add(data : importmerchandises): Observable<importmerchandises>{
    return this.http.post<importmerchandises>(this.api.urls.ImportOrder,data);
  }
  update(data : importmerchandises): Observable<importmerchandises>{
    return this.http.put<importmerchandises>(`${this.api.urls.ImportOrder}?id=${data.id}`,data);
  }
  delete(id : number): Observable<null>{
    return this.http.delete<null>(`${this.api.urls.ImportOrder}?id=${id}`);
  }
}
