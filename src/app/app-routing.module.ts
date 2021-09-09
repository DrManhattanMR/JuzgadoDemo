import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/sidenav/sidenav.module').then(m => m.SidenavPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'dictamenmedico',
    loadChildren: () => import('./pages/dictamenmedico/dictamenmedico.module').then(m => m.DictamenmedicoPageModule)
  },
  {
    path: 'dictamenpsicosocial',
    loadChildren: () => import('./pages/dictamenpsicosocial/dictamenpsicosocial.module').then(m => m.DictamenpsicosocialPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'addtestigo',
    loadChildren: () => import('./pages/addtestigo/addtestigo.module').then(m => m.AddtestigoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
