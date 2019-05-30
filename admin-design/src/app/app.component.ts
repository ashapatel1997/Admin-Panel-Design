import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selected: boolean = false;
  containerActive: boolean = false;
  selectedOption() {
    this.selected = true;
  }

  clickActive() {
    this.containerActive = !this.containerActive;
    console.log(this.containerActive);
  }
  name = 'Angular';
  icon: string = "fa-angle-down";
  constructor() { }

  ngOnInit() {

  }

  public changeIcon() {
    if (this.icon === 'fa-angle-down') {
      this.icon = 'fa-angle-up';
    } else {
      this.icon = 'fa-angle-down'
    }
  }

}

