import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { Baralho } from 'src/app/shared/services/models/card.model';
import { DeleteBaralho } from 'src/app/store/actions/app.actions';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-baralhos',
  templateUrl: './baralhos.component.html',
  styleUrls: ['./baralhos.component.scss'],
})
export class BaralhosComponent implements OnInit {
  @Select(AppState.getBaralhos) baralhos$: Observable<Baralho[]> | undefined;

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

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.baralhos$?.subscribe((s) => console.log('Baralhos', s));
  }

  getPokemons(baralho: Baralho) {
    const numeroPokemonsArray = baralho.cartas?.filter(
      (carta) => carta.supertype === 'Pokémon'
    );
    return `${numeroPokemonsArray.length} Pokémons`;
  }

  getTreinadores(baralho: Baralho) {
    const numeroPokemonsArray = baralho.cartas?.filter(
      (carta) => carta.supertype === 'Trainer'
    );
    return `${numeroPokemonsArray.length} Trainadores`;
  }

  criarBaralho() {
    this.router.navigate(['/create-baralho']);
  }

  deleteBaralho(baralho: Baralho) {
    this.store.dispatch(new DeleteBaralho(baralho.id));
  }

  onDetalhesBaralho(baralho: Baralho) {
    console.log('vai enviar', baralho);

    this.router.navigate(['/detalhes-baralho'], { state: baralho });
  }
}
