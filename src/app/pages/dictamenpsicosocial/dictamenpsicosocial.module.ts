import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DictamenpsicosocialPageRoutingModule } from './dictamenpsicosocial-routing.module';

import { DictamenpsicosocialPage } from './dictamenpsicosocial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DictamenpsicosocialPageRoutingModule
  ],
  declarations: [DictamenpsicosocialPage]
})
export class DictamenpsicosocialPageModule {}
