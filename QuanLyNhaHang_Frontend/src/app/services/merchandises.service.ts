import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { merchandises } from '../models/datatypes';
import { Observable } from 'rxjs';
import { RootObject } from '../models/root-object';

@Injectable({
  providedIn: 'root'
})
export class MerchandisesService {

  constructor(private http: HttpClient, private api: ApiService) { }
  getAll(): Observable<[merchandises]> {
    /*get api */
    return this.http.get<[merchandises]>(this.api.urls.merchandises);
  }

  get(id: number): Observable<merchandises> {
    return this.http.get<merchandises>(`${this.api.urls.merchandises}/${id}`);
  }

  add(data : merchandises): Observable<merchandises>{
    return this.http.post<merchandises>(this.api.urls.merchandises,data);
  }
  update(data : merchandises): Observable<merchandises>{
    return this.http.put<merchandises>(`${this.api.urls.merchandises}/${data.id}`,data);
  }
  delete(id : number): Observable<null>{
    return this.http.delete<null>(`${this.api.urls.merchandises}/${id}`);
  }
}
