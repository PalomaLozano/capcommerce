import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { FirstPageModule } from './first-page/first-page.module';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FirstPageModule
  ]
})
export class PagesModule { }
