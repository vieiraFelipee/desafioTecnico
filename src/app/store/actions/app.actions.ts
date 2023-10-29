import { Baralho } from 'src/app/shared/services/models/card.model';

export class AddBaralho {
  static readonly type = '[COMPONENT] Add Baralho';
  constructor(public baralho: Baralho) {}
}

export class DeleteBaralho {
  static readonly type = '[COMPONENT] Delete Baralho';
  constructor(public id: number) {}
}

export class GetCartas {
  static readonly type = '[COMPONENT] Get Cartas';
}
