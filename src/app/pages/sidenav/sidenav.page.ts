import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.page.html',
  styleUrls: ['./sidenav.page.scss'],
})
export class SidenavPage implements OnInit {
  active = '';

  NAV = [
    {
      name: 'Inicio',
      link: '/nav/inicio',
      icon: 'home'
    },
    {
      name: 'Login',
      link: '/nav/login',
      icon: 'person-circle'
    },
    {
      name: 'Crear Cuenta',
      link: '/nav/signup',
      icon: 'person-circle'
    },
    {
      name: 'Registrar Infractor',
      link: '/nav/registrar',
      icon: 'information-circle'
    },
    {
      name: 'Agregar Testigo',
      link: '/nav/addtestigo',
      icon: 'person-add'
    },

    {
      name: 'Dictamen Médico',
      link: '/nav/dictamenmedico',
      icon: 'medkit'
    },
    {
      name: 'Dictamen Psicosocial',
      link: '/nav/dictamenpsicosocial',
      icon: 'leaf'
    }
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url
    })
  }
  ngOnInit() {
  }

}
