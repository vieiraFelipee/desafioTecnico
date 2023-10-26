import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaralhosRoutingModule } from './baralhos-routing.module';
import { BaralhosComponent } from './baralhos.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [BaralhosComponent],
  imports: [
    CommonModule,
    BaralhosRoutingModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class BaralhosModule {}
