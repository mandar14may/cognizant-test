import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomNumberRoutingModule } from './random-number-routing.module';
import { RandomNumberComponent } from './random-number.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from '../shared/materials/materials.module';



@NgModule({
  declarations: [
    RandomNumberComponent
  ],
  imports: [
    CommonModule,
    RandomNumberRoutingModule,
    ReactiveFormsModule,
    MaterialsModule
  ]
})
export class RandomNumberModule { }
