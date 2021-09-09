import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input()
  form: FormControl;

  username = new FormControl('');
  password = new FormControl('');
  constructor(
    public toastController: ToastController,
    public loadingController: LoadingController,
    public router: Router
  ) { }

  ngOnInit() {
  }
  IniciarSesion() {
    if (this.username.value == 'admin' && this.password.value == 'admin') {
      this.presentLoading();
      setTimeout(() => {
        this.presentToast('Bienvenido Manfred');
        this.router.navigate(['/nav/inicio'])
      }, 2500);
    } else {
      this.presentLoading();
      setTimeout(() => {
        this.presentToast('Favor de comprobar credenciales');
      }, 2500);
    }
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
      message: 'Iniciando Sesión...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
