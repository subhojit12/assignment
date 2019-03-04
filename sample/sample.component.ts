import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  buttons = [
   
  ]
  
  addButton(){    
    var newButton ={name:""+this.buttons.length}
    this.buttons.push(newButton);
  }
  removeButton(num){    
    console.log(num);
    var num1=1
    this.buttons.splice(num,num1)
  }

  constructor() { }

  ngOnInit() {
  }

}
