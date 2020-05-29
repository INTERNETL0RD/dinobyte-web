import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  activeItem: number = 1;

  ngOnInit() {
    const observer1 = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        this.activeItem = 1;
        console.log(this.activeItem);
      }
    }, { threshold: [1] });

    const observer2 = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        this.activeItem = 2;
        console.log(this.activeItem);
      }
    }, { threshold: [1] });

    observer1.observe(document.querySelector('#home'));
    observer2.observe(document.querySelector('#about'));
  }
  title = 'dinobyte-web2';

  test(){
    console.log("Test");
    this.activeItem = this.activeItem;
  }


}
