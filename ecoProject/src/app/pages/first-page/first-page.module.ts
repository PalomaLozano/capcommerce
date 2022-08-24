import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page.component';
import { ComponentsModule } from 'src/app/components/components.module';




@NgModule({
  declarations: [
    FirstPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FirstPageModule
  ]
})
export class FirstPageModule { }
