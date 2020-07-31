import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from '../models/root-object';
import { order } from '../models/datatypes';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private api : ApiService , private http : HttpClient) { }

  getAll(): Observable<RootObject<[order]>>{
    return this.http.get<RootObject<[order]>>(this.api.urls.student);
  }

  get(id : number): Observable<RootObject<order>>{
    return this.http.get<RootObject<order>>(`${this.api.urls.student}?id=${id}`);
  }

  add(data : order): Observable<RootObject<order>>{
    return this.http.post<RootObject<order>>(this.api.urls.student,data);
  }
  update(data : order): Observable<RootObject<order>>{
    return this.http.put<RootObject<order>>(`${this.api.urls.student}?id=${data.id}`,data);
  }
  delete(id : number): Observable<RootObject<null>>{
    return this.http.delete<RootObject<null>>(`${this.api.urls.student}?id=${id}`);
  }
}
