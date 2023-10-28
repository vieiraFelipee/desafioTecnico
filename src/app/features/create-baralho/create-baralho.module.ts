import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBaralhoRoutingModule } from './create-baralho-routing.module';
import { CreateBaralhoComponent } from './create-baralho.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CreateBaralhoComponent],
  imports: [
    CommonModule,
    CreateBaralhoRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class CreateBaralhoModule {}
