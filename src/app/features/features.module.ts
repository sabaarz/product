import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { LoginModule } from './login/login.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    ProductsModule,
    UsersModule
  ],
  declarations: [FeaturesComponent]
})
export class FeaturesModule { }
