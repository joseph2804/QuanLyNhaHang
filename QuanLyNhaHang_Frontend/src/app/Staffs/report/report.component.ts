import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';
import { DateToDate } from 'src/app/Models/bill';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  fromDate: Date;
  toDate: Date;
  dateToDate: DateToDate = {} as DateToDate
  constructor(private billService: BillService) { }

  ngOnInit() {
  }
  send() {
    if (this.fromDate > this.toDate) {
      console.log("K dc");
    } else {
      this.dateToDate.fromDate = this.fromDate;
      this.dateToDate.toDate = this.toDate;
      this.billService.dateToDate(this.dateToDate).subscribe(res => {
        console.log(res);
      });
    }

  }

}
