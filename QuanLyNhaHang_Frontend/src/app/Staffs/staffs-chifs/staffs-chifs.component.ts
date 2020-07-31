import { Component, OnInit } from '@angular/core';
import { FoodForKitchen } from 'src/app/Models/food-for-kitchen';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staffs-chifs',
  templateUrl: './staffs-chifs.component.html',
  styleUrls: ['./staffs-chifs.component.scss']
})
export class StaffsChifsComponent implements OnInit {

  listFoods: FoodForKitchen[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.listFoods = JSON.parse(localStorage.getItem('listFood') || '[]');
    this.repeat();
  }

  repeat() {
    setInterval(function () {
      //window.location.reload();
    }, 30000);
  }

  doing(id: number) {
    for ( let i = 0; i < this.listFoods.length; i++) {
      if ( this.listFoods[i].id == id ) {
        this.listFoods[i].status = 1;
        break;
      }
    }
    localStorage.setItem('listFood', JSON.stringify(this.listFoods));

  }

  done(id: number) {
    for ( let i = 0; i < this.listFoods.length; i++) {
      if ( this.listFoods[i].id == id ) {
        this.listFoods[i].status = 2;
        break;
      }
    }
    localStorage.setItem('listFood', JSON.stringify(this.listFoods));
    this.destroyAsync(id);
  }

  async destroyAsync(id: number) {
    const value = <[FoodForKitchen]>await this.resolveAfter5Seconds(this.listFoods);
    for ( let i = 0; i < value.length; i++) {
      if ( value[i].id == id ) {
        var index = i;
        break;
      }
    }
    value.splice(index, 1);
    localStorage.setItem('listFood', JSON.stringify(value));
  }

  resolveAfter5Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 5000);
    });
  }


}
