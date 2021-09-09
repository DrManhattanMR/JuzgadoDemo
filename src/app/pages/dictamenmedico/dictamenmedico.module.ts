import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DictamenmedicoPageRoutingModule } from './dictamenmedico-routing.module';

import { DictamenmedicoPage } from './dictamenmedico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DictamenmedicoPageRoutingModule
  ],
  declarations: [DictamenmedicoPage]
})
export class DictamenmedicoPageModule {}
