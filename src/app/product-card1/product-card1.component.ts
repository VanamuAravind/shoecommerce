import { Component, Input } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'productcard1',
  templateUrl: './product-card1.component.html',
  styleUrls: ['./product-card1.component.css']
})
export class ProductCard1Component {
  @Input() productname : string;
  @Input() productimage: string;
  @Input() productcost : string;
  @Input() bgcolour : string;
  @Input() fgcolour : string;
  visibility:string;
  constructor(){
    this.visibility="hidden";
  }
  handleClick(){
    this.visibility="visible"
  }
  close(){
    this.visibility="hidden"

  }
}
