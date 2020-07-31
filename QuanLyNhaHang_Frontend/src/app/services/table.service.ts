import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { table } from '../models/datatypes';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient, private api: ApiService) { }
  getAll(): Observable<[table]> {
    /*get api */
    return this.http.get<[table]>(this.api.urls.table);
  }

  get(id: number): Observable<table> {
    return this.http.get<table>(`${this.api.urls.table}/${id}`);
  }

  add(data : table): Observable<table>{
    return this.http.post<table>(this.api.urls.table,data);
  }
  update(data : table): Observable<table>{
    return this.http.put<table>(`${this.api.urls.table}/${data.id}`,data);
  }
  delete(id : number): Observable<null>{
    return this.http.delete<null>(`${this.api.urls.table}/${id}`);
  }
}
