import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hypertension',
  templateUrl: './hypertension.component.html',
  styleUrls: ['./hypertension.component.css']
})
export class HypertensionComponent implements OnInit {

  hyPage= 'About Hypertension';

  constructor() { }

  ngOnInit(): void {

    setTimeout( () => {this.hyPage = 'High Blood Pressure'} , 5000 );

  }
  onButtonClick(){

    alert('Additional Information Can Be Found At https://www.ahajournals.org/journal/hyp');

  }

}
