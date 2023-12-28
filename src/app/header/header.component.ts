import { Component,inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  visibility:string;
  count:boolean;
  rotate:string;
  height:string;
  cartvis:string;
  cartflag:boolean;
  CartService:CartService=inject(CartService);
  cartcount:any;
  cart:Array<any>=[];

  constructor(){
    this.visibility="hidden"
    this.count=false;
    this.rotate="0deg"
    this.height="0px"
    this.cartflag=false
    this.cartvis="hidden"
    // this.cart=this.CartService.get();
    this.cartcount=this.CartService.getcount();
  }
  handleclick(){
    if(!this.count){
      this.count=true;
      this.rotate="-180deg"
      this.height="180px"
      this.visibility="visible";
    }
    else{
      this.count=false;
      this.rotate="0deg"
      this.height="0px"
      this.visibility="hidden";
    }
  }
  showcart(){
    if(!this.cartflag){
      this.cartvis="visible"
      this.cartflag=true
    }
    else{
      this.cartflag=false
      this.cartvis="hidden"
    }
  }
}
