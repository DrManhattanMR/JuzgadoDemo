import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  DictamenMedico: any[] =
    [
      {
        Folio: '1234',
        Sujeto: 'Emanuel Pérez Cortés',
        Fecha: new Date(Date.now()),
        Hora: new Date(Date.now()),
        Medico: 'Dr. Morty Universo 137',
        Dictamen: 'Estrés postraumático producto de la  guerra'
      }
    ]
  DictamenPsicoSocial: any[] =
    [
      {
        Folio: '1234',
        Sujeto: 'Emanuel Pérez Cortés',
        Fecha: new Date(Date.now()),
        Hora: new Date(Date.now()),
        Medico: 'Dr. Morty Universo 137',
        Dictamen: 'Sociópata'
      }
    ]
  constructor() { }
}
