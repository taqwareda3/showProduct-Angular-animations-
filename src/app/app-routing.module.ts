import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowProductsComponent } from './components/show-products/show-products.component';

const routes: Routes = [
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'products' , component:ShowProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
