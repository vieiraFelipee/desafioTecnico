import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Card } from './models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CartasService {
  constructor(private http: HttpClient) {}
}
