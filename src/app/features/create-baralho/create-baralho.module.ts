import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateBaralhoRoutingModule } from './create-baralho-routing.module';
import { CreateBaralhoComponent } from './create-baralho.component';


@NgModule({
  declarations: [
    CreateBaralhoComponent
  ],
  imports: [
    CommonModule,
    CreateBaralhoRoutingModule
  ]
})
export class CreateBaralhoModule { }
