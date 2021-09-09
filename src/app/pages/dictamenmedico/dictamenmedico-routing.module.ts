import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DictamenmedicoPage } from './dictamenmedico.page';

const routes: Routes = [
  {
    path: '',
    component: DictamenmedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DictamenmedicoPageRoutingModule {}
