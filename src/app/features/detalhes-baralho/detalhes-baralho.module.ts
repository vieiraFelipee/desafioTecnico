import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalhesBaralhoRoutingModule } from './detalhes-baralho-routing.module';
import { DetalhesBaralhoComponent } from './detalhes-baralho.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [DetalhesBaralhoComponent],
  imports: [CommonModule, DetalhesBaralhoRoutingModule, MatCardModule],
})
export class DetalhesBaralhoModule {}
