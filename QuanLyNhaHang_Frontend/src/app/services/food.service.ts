import { Injectable } from '@angular/core';
import { food } from '../models/datatypes';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../Models/food';
import { TimeNow } from '../Models/time-now';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient, private api: ApiService) { }

  get(id: number): Observable<food> {
    return this.http.get<food>(`${this.api.urls.food}/${id}`);
  }

  add(data : food): Observable<food>{
    return this.http.post<food>(this.api.urls.food,data);
  }
  update(data : food): Observable<food>{
    return this.http.put<food>(`${this.api.urls.food}/${data.id}`,data);
  }
  // delete(id : number): Observable<null>{
  //   return this.http.delete<null>(`${this.api.urls.food}/${id}`);
  // }
  getAll(): Observable<[Food]> {
    /* get api */
    console.log(this.api.urls.food);
    return this.http.get<[Food]>(this.api.urls.food);
  }
  //lấy món ăn theo id
  getById(id: number): Observable<Food> {
    return this.http.get<Food>(this.api.urls.food +`/${id}`);
  }

  //lấy ngày giờ hiện tại 
  getTime(): Observable<TimeNow> {
    return this.http.get<TimeNow>(this.api.urls.time);
  }
}
