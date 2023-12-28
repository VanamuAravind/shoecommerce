import { Component } from '@angular/core';
import { shoes } from 'src/data/shoes';
@Component({
  selector: 'shoeholder',
  templateUrl: './shoe-holder.component.html',
  styleUrls: ['./shoe-holder.component.css']
})

export class ShoeHolderComponent {
  items:any;
  constructor(){
    this.items=shoes;
  }
}
