import { Injectable } from '@angular/core';
import { employee } from '../models/datatypes';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {  } from '../models/root-object';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient, private api: ApiService) { }
  getAll(): Observable<[employee]> {
    /*get api */
    return this.http.get<[employee]>(this.api.urls.employee);
  }

  get(id: number): Observable<employee> {
    return this.http.get<employee>(`${this.api.urls.employee}/${id}`);
  }

  add(data : employee): Observable<employee>{
    return this.http.post<employee>(this.api.urls.employee,data);
  }
  update(data : employee): Observable<employee>{
    return this.http.put<employee>(`${this.api.urls.employee}/${data.id}`,data);
  }
  delete(id : number): Observable<null>{
    return this.http.delete<null>(`${this.api.urls.employee}/${id}`);
  }
}
