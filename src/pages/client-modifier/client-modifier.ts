import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { client } from '../../models/client/client.model';
import { ClientProvider } from '../../providers/client/client';
import { ClientPage } from '../client/client';

/**
 * Generated class for the ClientModifierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-modifier',
  templateUrl: 'client-modifier.html',
})
export class ClientModifierPage {
  data: any;
  aj_client: client;

  client = [];

  NUM_CLIENT: object
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private clientPr: ClientProvider) {

    this.NUM_CLIENT = this.navParams.get('data'),
      this.aj_client = {
        "NUM_CLIENT": this.NUM_CLIENT,
        "NOM": null,
        "PRENOM": null,
        "DATE_NAISS": null,
        "ADRESSE_CLIENT": null,
        "EMAIL_CLIENT": null,
        "TEL_CLIENT": null,
        "METIER": null
      }
  }

  ngOnInit() { this.getClientNum(); }

  async getClientNum() {
    this.clientPr.get_client_par_num(this.NUM_CLIENT)
      .subscribe(
        res => {
          this.data = res;
          //  this.client = this.data.return;
          this.aj_client = {


            "NUM_CLIENT": this.NUM_CLIENT,
            "NOM": this.data.return[0].NOM,
            "PRENOM": this.data.return[0].PRENOM,
            "DATE_NAISS": this.data.return[0].DATE_NAISS,
            "ADRESSE_CLIENT": this.data.return[0].ADRESSE_CLIENT,
            "EMAIL_CLIENT": this.data.return[0].EMAIL_CLIENT,
            "TEL_CLIENT": this.data.return[0].TEL_CLIENT,
            "METIER": this.data.return[0].METIER
          }
        });
  }

  validerClient($client) {
    this.clientPr.updateClient($client)
      .subscribe(res => {

        this.data = res;
        // this.refreshData();

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



}
