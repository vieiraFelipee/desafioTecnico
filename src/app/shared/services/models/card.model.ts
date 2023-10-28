export interface Card {
  id: string;
  name: string;
  supertype: string;
  subtypes?: string[] | null;
  hp: string;
  types?: string[] | null;
  evolvesFrom: string;
  abilities?: AbilitiesEntity[] | null;
  attacks?: AttacksEntity[] | null;
  weaknesses?: WeaknessesEntity[] | null;
  retreatCost?: string[] | null;
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers?: number[] | null;
  legalities: Legalities;
  images: Images;
  tcgplayer: Tcgplayer;
  cardmarket: Cardmarket;
}
export interface AbilitiesEntity {
  name: string;
  text: string;
  type: string;
}
export interface AttacksEntity {
  name: string;
  cost?: string[] | null;
  convertedEnergyCost: number;
  damage: string;
  text: string;
}
export interface WeaknessesEntity {
  type: string;
  value: string;
}
export interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: Images1;
}
export interface Legalities {
  unlimited: string;
  standard: string;
  expanded: string;
}
export interface Images1 {
  symbol: string;
  logo: string;
}
export interface Images {
  small: string;
  large: string;
}
export interface Tcgplayer {
  url: string;
  updatedAt: string;
  prices: Prices;
}
export interface Prices {
  normal: NormalOrReverseHolofoil;
  reverseHolofoil: NormalOrReverseHolofoil;
}
export interface NormalOrReverseHolofoil {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}
export interface Cardmarket {
  url: string;
  updatedAt: string;
  prices: Prices1;
}
export interface Prices1 {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  germanProLow?: null;
  suggestedPrice?: null;
  reverseHoloSell?: null;
  reverseHoloLow?: null;
  reverseHoloTrend?: null;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1?: null;
  reverseHoloAvg7?: null;
  reverseHoloAvg30?: null;
}
