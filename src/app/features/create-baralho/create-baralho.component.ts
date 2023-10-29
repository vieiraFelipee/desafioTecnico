import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, take } from 'rxjs';
import { Baralho, Card } from 'src/app/shared/services/models/card.model';
import { AddBaralho, GetCartas } from 'src/app/store/actions/app.actions';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-create-baralho',
  templateUrl: './create-baralho.component.html',
  styleUrls: ['./create-baralho.component.scss'],
})
export class CreateBaralhoComponent implements OnInit {
  nameForm: FormGroup;

  @Select(AppState.getCartas) cartas$: Observable<Card[]> | undefined;
  cartasOriginal: Card[] = [];

  cardList: Card[] = [];
  baralhoLocal: Baralho = {
    id: 0,
    nome: 'Eita',
    cartas: [],
  };

  constructor(
    private store: Store,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.nameForm = this.fb.group({
      name: ['', Validators.required],
      search: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new GetCartas());
    this.cartas$?.pipe(take(2)).subscribe((cartas) => {
      this.cartasOriginal = cartas;
    });
  }

  addCarta(carta: Card) {
    this.cardList.push(carta);
  }

  salvarBaralho() {
    if (this.nameForm.valid) {
      this.baralhoLocal.nome = this.nameForm.get('name')?.value;
    }

    this.baralhoLocal.cartas = this.cardList;
    this.baralhoLocal.id = new Date().getTime();

    if (this.baralhoLocal)
      this.store.dispatch(new AddBaralho(this.baralhoLocal));
    this.router.navigate(['/baralhos']);
  }

  public clearInput(): void {
    this.nameForm.get('name')?.setValue('');
  }

  onInputChange() {
    if (this.nameForm.get('search')?.value) {
      this.cartas$?.pipe(take(1)).subscribe((cartas) => {
        this.cartasOriginal = cartas.filter((card) =>
          card.name
            .toLowerCase()
            .includes(this.nameForm.get('search')?.value.toLowerCase())
        );
      });
    } else {
      this.cartas$?.pipe(take(1)).subscribe((cartas) => {
        this.cartasOriginal = cartas;
      });
    }
  }
}
