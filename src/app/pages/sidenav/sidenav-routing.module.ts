import { AddtestigoPageModule } from './../addtestigo/addtestigo.module';
import { SignupPageModule } from './../signup/signup.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavPage } from './sidenav.page';

const routes: Routes = [
  {
    path: 'nav',
    component: SidenavPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('../signup/signup.module').then(m => m.SignupPageModule)
      },
      {
        path: 'registrar',
        loadChildren: () => import('../registro/registro.module').then(m => m.RegistroPageModule)
      },
      {
        path: 'addtestigo',
        loadChildren: () => import('../addtestigo/addtestigo.module').then(m => m.AddtestigoPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'dictamenmedico',
        loadChildren: () => import('../dictamenmedico/dictamenmedico.module').then(m => m.DictamenmedicoPageModule)
      },
      {
        path: 'dictamenpsicosocial',
        loadChildren: () => import('../dictamenpsicosocial/dictamenpsicosocial.module').then(m => m.DictamenpsicosocialPageModule)
      },
      {
        path: '',
        redirectTo: '/nav/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/nav/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidenavPageRoutingModule { }
