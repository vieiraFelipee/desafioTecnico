import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Baralho } from 'src/app/shared/services/models/card.model';

@Component({
  selector: 'app-detalhes-baralho',
  templateUrl: './detalhes-baralho.component.html',
  styleUrls: ['./detalhes-baralho.component.scss'],
})
export class DetalhesBaralhoComponent {
  public baralho: Baralho = {
    id: 0,
    nome: '',
    cartas: [],
  };

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const complexObject = history.state as Baralho;
      console.log(complexObject);
      this.baralho = complexObject;
    });
  }
}
