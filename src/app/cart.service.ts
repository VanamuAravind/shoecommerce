import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Array<any>=[];
  public count:number;
  constructor() {
    this.count=0
   }
  public addp(name:string,cost:string,company:string,image:string,index:number){
    var product={
      name:name,
      cost:cost,
      company:company,
      image:image,
      index:this.count,
      id:index
    }
    this.cart.push(product);
    this.count+=1;
    // console.log(this.cart)
  }
  public get(){
    return this.cart;
  }
  public getcount(){
    // var len=this.cart.length;
    return this.count;
  }
  public delete(id:number){
    // let removedElementsArray = this.cart.splice(index, 1);
    // delete this.cart[index];
    // let index = this.cart.indexOf(id);
    let elementsToRemove = 1;
    this.cart.splice(id-1, elementsToRemove);
  }
}
