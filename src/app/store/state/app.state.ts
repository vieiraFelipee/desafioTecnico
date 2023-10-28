import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetCartas } from '../actions/app.actions';
import { Injectable } from '@angular/core';
import { Card } from 'src/app/shared/services/models/card.model';
import { HttpClient } from '@angular/common/http';
import { catchError, take, tap } from 'rxjs';

export class AppStateModel {
  cartas: Card[] | undefined;
}

@State<AppStateModel>({
  name: 'profile',
  defaults: {
    cartas: [],
  },
})
@Injectable()
export class AppState {
  constructor(private http: HttpClient) {}

  @Selector()
  static getCartas(state: AppStateModel) {
    return state.cartas;
  }

  @Action(GetCartas)
  getCartas({ patchState }: StateContext<AppStateModel>): void {
    console.log('Dispatch');

    const url = 'https://api.pokemontcg.io/v2/cards/';

    this.http
      .get(url)
      .pipe(
        take(1),
        tap((res: any) => {
          console.log('AAAA');

          patchState({
            cartas: res.data,
          });
        }),
        catchError((e) => {
          console.log('Caiu no Erro', e);
          return e;
        })
      )
      .subscribe();
  }
}
