import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaralhosRoutingModule } from './baralhos-routing.module';
import { BaralhosComponent } from './baralhos.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [BaralhosComponent],
  imports: [
    CommonModule,
    BaralhosRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class BaralhosModule {}
