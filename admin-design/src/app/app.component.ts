import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  showVar: boolean = false;

  toggleChild() {
    this.showVar = !this.showVar;
  }
  name = 'Angular';
 
  constructor() { }

  ngOnInit() {
   
  }

 
}

