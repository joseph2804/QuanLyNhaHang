import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { employee, type } from '../models/datatypes';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient, private api: ApiService) { }

  getAll(): Observable<[type]> {
    /*get api */
    return this.http.get<[type]>(this.api.urls.type);
  }

  get(id: number): Observable<type> {
    return this.http.get<type>(`${this.api.urls.type}/${id}`);
  }
}
