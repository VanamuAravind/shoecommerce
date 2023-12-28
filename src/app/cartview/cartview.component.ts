import { Component,inject } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'cartview',
  templateUrl: './cartview.component.html',
  styleUrls: ['./cartview.component.css']
})
export class CartviewComponent {
  CartService:CartService=inject(CartService);
  cart:Array<any>=[];
  vis:string;
  pos:string;
  constructor(){
    this.cart=this.CartService.get();
    if(this.cart.length===0){
      this.vis="visible"
      this.pos="relative"
    }
    else{
      this.pos="absolute"
      this.vis="hidden"
    }
    // console.log(this.cart)
  }
  delete(id:number){
    this.CartService.delete(id);
  }
}
