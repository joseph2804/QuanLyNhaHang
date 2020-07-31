import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { warehouse } from '../models/datatypes';
import { RootObject } from '../models/root-object';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http : HttpClient , private api: ApiService ) { }


  getAll(): Observable<RootObject<[warehouse]>> {
    /*get api */
    return this.http.get<RootObject<[warehouse]>>(this.api.urls.student);
  }

  get(id: number): Observable<RootObject<warehouse>> {
    return this.http.get<RootObject<warehouse>>(`${this.api.urls.student}?id=${id}`);
  }
}
