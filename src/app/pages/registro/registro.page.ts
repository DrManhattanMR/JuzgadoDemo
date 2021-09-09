import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  DictamenMedico: any = undefined;
  DictamenPsicoSocial: any = undefined;
  Folio: string = '';
  Testigos: any[] = [
    {
      Folio: '1234',
      Nombre: 'Ricardo Anaya',
      Domicilio: 'Cd. Mx',
      Ocupacion: 'Chicken Little'
    },
    {
      Folio: '1234',
      Nombre: 'Andrés Manuel',
      Domicilio: 'Tabasco City',
      Ocupacion: 'Payaso'
    },
    {
      Folio: '1234',
      Nombre: 'Enrique Peña',
      Domicilio: 'España',
      Ocupacion: 'Hermoso 24/7'
    }
  ]
  constructor(
    public alertController: AlertController,
    public srvlogin: LoginService,
    public toastController: ToastController,
    public router: Router
  ) { }

  ngOnInit() {
  }
  async PresentarMedico(Folio: string, Sujeto: string, Fecha: Date, Hora: Date, Medico: string, Dictamen: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Dictamen Médico',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          value: Folio
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: Sujeto
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'text',
          value: Fecha.toLocaleDateString().split("T")[0]
        },
        {
          label: 'Hora',
          name: 'name3',
          value: Hora.toLocaleTimeString(),
          type: 'text'
        },
        {
          name: 'name1',
          type: 'text',
          value: Medico
        },
        {
          name: 'name1',
          type: 'textarea',
          value: Dictamen
        }
      ],
      buttons: [{
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok');
        }
      }
      ]
    });

    await alert.present();
  }
  async PresentarSocial(Folio: string, Sujeto: string, Fecha: Date, Hora: Date, Medico: string, Dictamen: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Dictamen PsicoSocial',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          value: Folio
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: Sujeto
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'text',
          value: Fecha.toLocaleDateString().split("T")[0]
        },
        {
          label: 'Hora',
          name: 'name3',
          value: Hora.toLocaleTimeString(),
          type: 'text'
        },
        {
          name: 'name1',
          type: 'text',
          value: Medico
        },
        {
          name: 'name1',
          type: 'textarea',
          value: Dictamen
        }
      ],
      buttons: [{
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok');
        }
      }
      ]
    });

    await alert.present();
  }
  VerMedico() {
    if (!this.Folio) {
      this.presentToast('Favor de Indicar un Folio');
      return;
    }
    this.DictamenMedico = this.srvlogin.DictamenMedico.find(x => x.Folio == this.Folio);
    if (this.DictamenMedico != undefined) {
      this.PresentarMedico(this.DictamenMedico.Folio, this.DictamenMedico.Sujeto, new Date(this.DictamenMedico.Fecha), this.DictamenMedico.Hora, this.DictamenMedico.Medico, this.DictamenMedico.Dictamen)
    } else {
      this.presentAlertConfirm();
    }
  }
  VerSocial() {
    if (!this.Folio) {
      this.presentToast('Favor de Indicar un Folio');
      return;
    }
    this.DictamenPsicoSocial = this.srvlogin.DictamenPsicoSocial.find(x => x.Folio == this.Folio);
    if (this.DictamenPsicoSocial != undefined) {
      this.PresentarSocial(this.DictamenPsicoSocial.Folio, this.DictamenPsicoSocial.Sujeto, new Date(this.DictamenPsicoSocial.Fecha), this.DictamenPsicoSocial.Hora, this.DictamenPsicoSocial.Medico, this.DictamenPsicoSocial.Dictamen)
    } else {
      this.presentAlertConfirm2();
    }
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Dictamen Médico',
      message: '<strong>No existe Dictamen Médico</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Agregar',
          handler: () => {
            this.agregarDictamenMedico();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlertConfirm2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Dictamen PsicoSocial',
      message: '<strong>No existe Dictamen PsicoSocial</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Agregar',
          handler: () => {
            this.agregarDictamenPsicoSocial()
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
  verTestigo(item: any) {
    this.PresentarTestigo(item.Folio, item.Nombre, item.Domicilio, item.Ocupacion)
  }
  async PresentarTestigo(Folio: string, Nombre: string, Domicilio: string, Ocupacion: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Información del Testigo',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          value: Folio
        },
        {
          name: 'name1',
          type: 'text',
          value: Nombre
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: Domicilio
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: Ocupacion
        }
      ],
      buttons: [{
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok');
        }
      }
      ]
    });

    await alert.present();
  }
  agregarDictamenMedico() {
    this.router.navigate(['/nav/dictamenmedico'])
  }
  agregarDictamenPsicoSocial() {
    this.router.navigate(['/nav/dictamenpsicosocial'])
  }
}
