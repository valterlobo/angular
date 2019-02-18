import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { RouterModule } from '@angular/router';
import { OrderDetailComponent } from './order-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'orders', component: OrderComponent },
      { path: 'orders/:id', component: OrderDetailComponent }
    ]),
  ],
  declarations: [
    OrderComponent,
    OrderDetailComponent
  ]
})
export class OrderModule { }
