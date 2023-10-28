import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { Card } from 'src/app/shared/services/models/card.model';
import { GetCartas } from 'src/app/store/actions/app.actions';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-create-baralho',
  templateUrl: './create-baralho.component.html',
  styleUrls: ['./create-baralho.component.scss'],
})
export class CreateBaralhoComponent implements OnInit {
  @Select(AppState.getCartas) cartas$: Observable<Card[]> | undefined;

  baralhoLocal: Card[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetCartas());
    this.cartas$?.subscribe((a) => console.log('Cartas', a));
  }

  addCarta(carta: Card) {
    this.baralhoLocal.push(carta);
  }
}
