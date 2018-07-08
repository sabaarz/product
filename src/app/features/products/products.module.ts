import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductOrderComponent } from './product-order/product-order.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddProductComponent, ProductListComponent, ProductOrderComponent]
})
export class ProductsModule { }
