import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'baralhos',
    loadChildren: () =>
      import('./features/baralhos/baralhos.module').then(
        (m) => m.BaralhosModule
      ),
  },
  {
    path: '',
    redirectTo: 'baralhos',
    pathMatch: 'full',
  },
  {
    path: 'create-baralho',
    loadChildren: () =>
      import('./features/create-baralho/create-baralho.module').then(
        (m) => m.CreateBaralhoModule
      ),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'detalhes-baralho',
    loadChildren: () =>
      import('./features/detalhes-baralho/detalhes-baralho.module').then(
        (m) => m.DetalhesBaralhoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
