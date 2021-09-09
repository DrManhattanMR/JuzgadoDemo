import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtestigoPageRoutingModule } from './addtestigo-routing.module';

import { AddtestigoPage } from './addtestigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddtestigoPageRoutingModule
  ],
  declarations: [AddtestigoPage]
})
export class AddtestigoPageModule {}
