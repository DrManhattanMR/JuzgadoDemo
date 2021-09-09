import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-dictamenmedico',
  templateUrl: './dictamenmedico.page.html',
  styleUrls: ['./dictamenmedico.page.scss'],
})
export class DictamenmedicoPage implements OnInit {
  DictamenMedico: any = null;
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
    this.DictamenMedico = undefined
    this.presentLoading();
    setTimeout(() => {
      this.DictamenMedico = this.srvusuario.DictamenMedico.find(x => x.Folio == this.Folio);
      console.log(this.DictamenMedico);
      if (this.DictamenMedico == undefined) {
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

    this.srvusuario.DictamenMedico.push(this.NuevoDictamen);
    this.NuevoDictamen.Folio = '';
    this.NuevoDictamen.Sujeto = '';
    this.NuevoDictamen.Fecha = new Date();
    this.NuevoDictamen.Hora = new Date();
    this.NuevoDictamen.Medico = '';
    this.NuevoDictamen.Dictamen = '';
    this.DictamenMedico = undefined;
    this.Nuevo = false;
    this.Existe = false;
    this.presentToast('Dictamen Agregado con Éxito')
  }
}
