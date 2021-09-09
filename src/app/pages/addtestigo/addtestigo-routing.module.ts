import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtestigoPage } from './addtestigo.page';

const routes: Routes = [
  {
    path: '',
    component: AddtestigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtestigoPageRoutingModule {}
