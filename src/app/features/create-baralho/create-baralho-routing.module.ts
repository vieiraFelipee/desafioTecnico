import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBaralhoComponent } from './create-baralho.component';

const routes: Routes = [{ path: '', component: CreateBaralhoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateBaralhoRoutingModule { }
