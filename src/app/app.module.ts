import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCard1Component } from './product-card1/product-card1.component';
import { ShoeHolderComponent } from './shoe-holder/shoe-holder.component';
import { HomeComponent } from './home/home.component';
import { ShowproductofferComponent } from './showproductoffer/showproductoffer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { CatagoryTemplateComponent } from './catagory-template/catagory-template.component';
import { TopsavestemplateComponent } from './topsavestemplate/topsavestemplate.component';
import { CartService } from './cart.service';
import { CartviewComponent } from './cartview/cartview.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductCard1Component,
    ShoeHolderComponent,
    HomeComponent,
    ShowproductofferComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    CatagoryTemplateComponent,
    TopsavestemplateComponent,
    CartviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
