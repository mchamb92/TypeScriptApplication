import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diabetes',
  templateUrl: './diabetes.component.html',
  styleUrls: ['./diabetes.component.css']
})
export class DiabetesComponent implements OnInit {
  dyPage = 'About Diabetes' ;


  constructor() { }

  ngOnInit(): void {
  }

}
