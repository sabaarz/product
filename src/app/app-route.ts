import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login/login.component'
import { AddProductComponent } from './features/products/add-product/add-product.component'
export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'add-product', component: AddProductComponent },
   { path: '', component: LoginComponent },
]