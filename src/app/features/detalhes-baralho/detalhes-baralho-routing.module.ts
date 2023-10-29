import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesBaralhoComponent } from './detalhes-baralho.component';

const routes: Routes = [{ path: '', component: DetalhesBaralhoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalhesBaralhoRoutingModule { }
