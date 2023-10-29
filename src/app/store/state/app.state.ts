import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddBaralho, DeleteBaralho, GetCartas } from '../actions/app.actions';
import { Injectable } from '@angular/core';
import { Baralho, Card } from 'src/app/shared/services/models/card.model';
import { HttpClient } from '@angular/common/http';
import { catchError, take, tap } from 'rxjs';

export class AppStateModel {
  cartas: Card[] | undefined;
  baralhos: Baralho[] | undefined;
}

@State<AppStateModel>({
  name: 'profile',
  defaults: {
    cartas: [],
    baralhos: [],
  },
})
@Injectable()
export class AppState {
  constructor(private http: HttpClient) {}

  @Selector()
  static getCartas(state: AppStateModel) {
    return state.cartas;
  }

  @Selector()
  static getBaralhos(state: AppStateModel) {
    return state.baralhos;
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

  @Action(AddBaralho)
  addBaralho(ctx: StateContext<AppStateModel>, { baralho }: AddBaralho): void {
    let baralhos = ctx.getState().baralhos;
    if (baralhos) baralhos.push(baralho);

    ctx.patchState({
      baralhos: baralhos,
    });
  }

  @Action(DeleteBaralho)
  deleteBaralho(ctx: StateContext<AppStateModel>, { id }: DeleteBaralho): void {
    let baralhos = ctx.getState().baralhos;
    const filteredBaralho = baralhos?.filter((baralho) => baralho.id !== id);

    ctx.patchState({
      baralhos: filteredBaralho,
    });
  }
}
