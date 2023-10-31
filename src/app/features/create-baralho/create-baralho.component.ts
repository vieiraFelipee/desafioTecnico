import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription, debounceTime, skip, take } from 'rxjs';
import { Baralho, Card } from 'src/app/shared/services/models/card.model';
import { AddBaralho, SearchCartas } from 'src/app/store/actions/app.actions';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-create-baralho',
  templateUrl: './create-baralho.component.html',
  styleUrls: ['./create-baralho.component.scss'],
})
export class CreateBaralhoComponent implements OnInit, OnDestroy {
  nameForm: FormGroup;

  private cartasSubscription: Subscription | undefined;

  @Select(AppState.getCartas) cartas$: Observable<Card[]> | undefined;
  cartasOriginal: Card[] = [];

  cardList: Card[] = [];
  baralhoLocal: Baralho = {
    id: 0,
    nome: '',
    cartas: [],
  };

  acao = 'Criando';

  loading = true;

  constructor(
    private store: Store,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.nameForm = this.fb.group({
      name: ['', Validators.required],
      search: [''],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(take(1)).subscribe((params) => {
      if (history) {
        const b = history.state as Baralho;
        if (b.cartas) {
          this.acao = 'Editando';
          this.nameForm.get('name')?.setValue(b.nome);
          this.cardList = b.cartas;
          this.baralhoLocal.id = b.id;
        }
      }
    });

    this.store.dispatch(new SearchCartas(''));
    this.cartasSubscription = this.cartas$
      ?.pipe(skip(1))
      .subscribe((cartas) => {
        this.cartasOriginal = cartas;
        this.loading = false;
      });

    this.checkBusca();
  }

  checkBusca() {
    this.nameForm
      .get('search')
      ?.valueChanges.pipe(debounceTime(700))
      .subscribe((value) => {
        this.onInputChange(value);
      });
  }

  addCarta(carta: Card) {
    const cartasIguais = this.cardList?.filter(
      (cartas) => cartas.name === carta.name
    );

    if (cartasIguais.length > 3) {
      this.openSnackBar(
        'Só é possive adicionar 4 cartas com mesmo nome',
        'fechar'
      );
      return;
    }
    if (this.cardList.length < 60) this.cardList.push(carta);
    else this.openSnackBar('Limite maximo de cartas atingido', 'fechar');
  }

  salvarBaralho() {
    if (this.nameForm.valid) {
      this.baralhoLocal.nome = this.nameForm.get('name')?.value;

      this.baralhoLocal.cartas = this.cardList;
      if (this.baralhoLocal.id === 0)
        this.baralhoLocal.id = new Date().getTime();

      if (this.baralhoLocal)
        this.store.dispatch(new AddBaralho(this.baralhoLocal));
      this.router.navigate(['/baralhos']);
    } else {
      this.openSnackBar('Dê um nome ao seu Baralho', 'fechar');
    }
  }

  public clearInput(): void {
    this.nameForm.get('name')?.setValue('');
  }

  onInputChange(text: string) {
    this.loading = true;
    this.store.dispatch(new SearchCartas(text));
  }

  limparBusca() {
    this.nameForm.get('search')?.setValue('');
  }

  deleteCard(carta: Card) {
    const index = this.cardList.findIndex((card) => card.id === carta.id);
    if (index !== -1) {
      this.cardList.splice(index, 1);
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 3000 });
  }

  ngOnDestroy(): void {
    if (this.cartasSubscription) {
      this.cartasSubscription.unsubscribe();
    }
  }
}
