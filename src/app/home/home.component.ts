import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data:any;
  constructor(){
    this.data=[
      {
        name:"Adidas Shoes",
        image:"/assets/images/greyshoe.png"
      },
      {
        name:"Adidas Shoes",
        image:"/assets/images/greyshoe.png"
      },
      {
        name:"Adidas Shoes",
        image:"/assets/images/greyshoe.png"
      },
      {
        name:"Adidas Shoes",
        image:"/assets/images/greyshoe.png"
      },
      {
        name:"Adidas Shoes",
        image:"/assets/images/greyshoe.png"
      },
      {
        name:"Adidas Shoes",
        image:"/assets/images/greyshoe.png"
      },
      {
        name:"Adidas Shoes",
        image:"/assets/images/greyshoe.png"
      },
      {
        name:"Adidas Shoes",
        image:"/assets/images/greyshoe.png"
      },
      {
        name:"Adidas Shoes",
        image:"/assets/images/greyshoe.png"
      },
      {
        name:"Adidas Shoes",
        image:"/assets/images/greyshoe.png"
      },
      {
        name:"Adidas Shoes",
        image:"/assets/images/greyshoe.png"
      },
      {
        name:"Adidas Shoes",
        image:"/assets/images/greyshoe.png"
      }
    ]
  }
}
