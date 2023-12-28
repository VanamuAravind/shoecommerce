import { Component,Input ,inject} from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'topsavestemplate',
  templateUrl: './topsavestemplate.component.html',
  styleUrls: ['./topsavestemplate.component.css']
})
export class TopsavestemplateComponent {
  @Input() image:string;
  @Input() name:string;
  @Input() index:number;
  width:any;
  flag=true;
  visibility:any;
  pos:any;
  pos1:any;
  vis:any;
  txt:any;
  bgcolor:any;
  txtcolor:any;
  rot:any;
  id:number;
  CartService:CartService=inject(CartService);
  randomInt = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;
  constructor(public cs:CartService){
    this.id=this.randomInt(0,99999999)
    this.width="100%"
    this.visibility="hidden"
    this.pos="absolute"
    this.pos1="translateX(0%)"
    this.vis="visible"
    this.txt="Add"
    this.bgcolor="#5c5c5c80"
    this.txtcolor="rgb(92, 92, 92)";
    this.rot="0deg"
  }

  animate(){
    if(this.flag){
      // this.cs.cart.push(this.name);
      this.width="23%";
      this.flag=false;
      this.visibility="visible";
      this.pos1="translateX(100%)"
      this.pos="relative"
      this.vis="hidden"
      setTimeout(()=>{
      this.CartService.addp(this.name,"2000","adidas",this.image,this.index);
        this.width="100%";
        this.flag=false;
        this.visibility="hidden";
        this.pos1="translateX(0%)"
        this.pos="absolute"
        this.txt="Added"
        this.vis="visible"
        this.bgcolor="#4bce91";
        this.txtcolor="white"
        this.rot="45deg"
    },3000);
    }
    else{
      this.width="100%";
      this.flag=true;
      this.visibility="hidden";
      this.pos1="translateX(0%)"
      this.pos="absolute"
      this.vis="visible"
      this.txt="Add"
      this.bgcolor="#5c5c5c80"
      this.txtcolor="rgb(92, 92, 92)";
    this.rot="0deg"
    this.CartService.delete(this.index)

    }
    
  }
  


}
