import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';
import { client } from '../../models/client/client.model';
import { ClientProvider } from '../../providers/client/client';

/**
 * Generated class for the ClientAjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-ajout',
  templateUrl: 'client-ajout.html',



})
export class ClientAjoutPage {
  aj_client: client;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private clientPr: ClientProvider,
    private loadingCtrl: LoadingController) {

    this.aj_client = {
      "NUM_CLIENT": null,
      "NOM": null,
      "PRENOM": null,
      "DATE_NAISS": null,
      "ADRESSE_CLIENT": null,
      "EMAIL_CLIENT": null,
      "TEL_CLIENT": null,
      "METIER": null
    }


  }


  async addClient(client$) {
     this.clientPr.postClient(client$)
      .subscribe(res => {
        let alert = this.alertCtrl.create({
          title: "Information",
          subTitle: res['msg'],
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
      }, (err) => {
        console.log(err);
      });

  }




  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'kkkk',
      subTitle: 'Client ajouté avec succès !',
      cssClass: 'nomclient',
      buttons: ['ok']
    });
    alert.present();
  }
}
