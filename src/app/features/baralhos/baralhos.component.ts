import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baralhos',
  templateUrl: './baralhos.component.html',
  styleUrls: ['./baralhos.component.scss'],
})
export class BaralhosComponent {
  baralhos: any[] = [
    {
      nome: 'baralho1',
    },
    {
      nome: 'baralho2',
    },
    {
      nome: 'baralho3',
    },
    {
      nome: 'baralho4',
    },
    {
      nome: 'baralho4',
    },
    {
      nome: 'baralho4',
    },
    {
      nome: 'baralho4',
    },
    {
      nome: 'baralho4',
    },
    {
      nome: 'baralho4',
    },
  ];

  constructor(private router: Router) {}

  criarBaralho() {
    this.router.navigate(['/create-baralho']);
  }
}
