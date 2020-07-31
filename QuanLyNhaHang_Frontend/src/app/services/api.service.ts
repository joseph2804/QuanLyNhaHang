import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://localhost:5000/api/";
  urls = {
    student : this.baseUrl + 'students-free.php',
    employee : this.baseUrl + 'Employees',
    merchandises : this.baseUrl + 'products',
    ImportOrder : this.baseUrl + 'ImportOrders',
    Overview : this.baseUrl + 'EplOverviews',
    table : this.baseUrl + 'tables',
    countWkTable : this.baseUrl + 'EplOverviews/CountTableWK',
    countTable : this.baseUrl + 'EplOverviews/CountTable',
    food : this.baseUrl + 'Foods',
    type : this.baseUrl + 'Types',
    total : this.baseUrl + 'ExportOrders/Total',
    sumDateToDate : this.baseUrl + 'EplOverviews/sumDateToDate',
    listDateToDate : this.baseUrl + 'EplOverviews/listDateToDate',
    exportOrder : this.baseUrl + 'ExportOrders',
    detailExport : this.baseUrl + 'DetailExportOrders',
    time: this.baseUrl + 'Foods/current-time',
    bill: this.baseUrl + 'Bills',
    detailBill: this.baseUrl + 'DetailBills',
    dateToDate: this.baseUrl + 'Bills/date-to-date'

  };
  constructor() { }
}
