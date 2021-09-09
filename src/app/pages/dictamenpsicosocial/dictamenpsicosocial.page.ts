import { ToastController, LoadingController } from '@ionic/angular';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dictamenpsicosocial',
  templateUrl: './dictamenpsicosocial.page.html',
  styleUrls: ['./dictamenpsicosocial.page.scss'],
})
export class DictamenpsicosocialPage implements OnInit {
  DictamenPsicoSocial: any = null;
  Nuevo: boolean = false;
  Existe: boolean = false;
  Folio: string = '';
  NuevoDictamen: any = {
    Folio: '',
    Sujeto: '',
    Fecha: new Date(),
    Hora: new Date(),
    Medico: '',
    Dictamen: ''
  }
  constructor(public srvusuario: LoginService, public toastController: ToastController, public loadingController: LoadingController) { }

  ngOnInit() {
  }
  verificarFolio() {
    this.Nuevo = false;
    this.Existe = false;
    this.DictamenPsicoSocial = undefined
    this.presentLoading();
    setTimeout(() => {
      this.DictamenPsicoSocial = this.srvusuario.DictamenPsicoSocial.find(x => x.Folio == this.Folio);
      console.log(this.DictamenPsicoSocial);
      if (this.DictamenPsicoSocial == undefined) {
        this.Nuevo = true;
        this.Existe = false;
        this.NuevoDictamen.Folio = this.Folio;
      } else {
        this.Existe = true;
        this.Nuevo = false;
      }
    }, 1500);
  }
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Verficando Folio...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  Guardar() {
    console.log(this.NuevoDictamen);

    this.srvusuario.DictamenPsicoSocial.push(this.NuevoDictamen);
    this.NuevoDictamen.Folio = '';
    this.NuevoDictamen.Sujeto = '';
    this.NuevoDictamen.Fecha = new Date();
    this.NuevoDictamen.Hora = new Date();
    this.NuevoDictamen.Medico = '';
    this.NuevoDictamen.Dictamen = '';
    this.DictamenPsicoSocial = undefined;
    this.Nuevo = false;
    this.Existe = false;
    this.presentToast('Dictamen Agregado con Éxito')
  }
}
