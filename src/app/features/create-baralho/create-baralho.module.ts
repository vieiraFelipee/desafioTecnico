import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBaralhoRoutingModule } from './create-baralho-routing.module';
import { CreateBaralhoComponent } from './create-baralho.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [CreateBaralhoComponent],
  imports: [
    CommonModule,
    CreateBaralhoRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
})
export class CreateBaralhoModule {}
