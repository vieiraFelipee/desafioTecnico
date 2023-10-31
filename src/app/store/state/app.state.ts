import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  AddBaralho,
  DeleteBaralho,
  SearchCartas,
} from '../actions/app.actions';
import { Injectable } from '@angular/core';
import { Baralho, Card } from 'src/app/shared/services/models/card.model';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  @Action(SearchCartas)
  searchCartas(
    { patchState }: StateContext<AppStateModel>,
    { text }: SearchCartas
  ): void {
    const url = 'https://api.pokemontcg.io/v2/cards/';

    let params = new HttpParams();
    if (text) {
      params = params.set('q', 'name:' + text);
    }

    this.http
      .get(url, { params })
      .pipe(
        take(1),
        tap((res: any) => {
          patchState({
            cartas: res.data,
          });
        }),
        catchError((e) => {
          return e;
        })
      )
      .subscribe();
  }

  @Action(AddBaralho)
  addBaralho(ctx: StateContext<AppStateModel>, { baralho }: AddBaralho): void {
    let baralhos = ctx.getState().baralhos;
    let b: Baralho[] = [];
    if (baralhos) {
      b = baralhos.filter((item) => item.id !== baralho.id);
      b.push(baralho);
    }

    ctx.patchState({
      baralhos: b,
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
