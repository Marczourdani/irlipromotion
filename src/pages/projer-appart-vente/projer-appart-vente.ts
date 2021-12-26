import { Component, Injectable } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { client } from '../../models/client.model';
import { vente } from '../../models/vente.model';
import { AppartementProvider } from '../../providers/appartement/appartement';
import { ClientProvider } from '../../providers/client/client';

/**
 * Generated class for the ProjerAppartVentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projer-appart-vente',
  templateUrl: 'projer-appart-vente.html',
})

export class ProjerAppartVentePage {
  v_appart: vente;
  c_client: client;
  NUM_BIEN: object;
  NUM: object;

  data: any;
  client = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public appartPr: AppartementProvider,
    public clientPr: ClientProvider,
    public alertCtrl: AlertController) {

    this.NUM_BIEN = this.navParams.get('data');
    this.NUM = this.navParams.get('data1');
   
    this.v_appart = {
      "ID_TRANS": null,
      "NUM_BIEN":  this.NUM_BIEN,
      "NUM_CLIENT": null,
      "ETAT_TRANS": "1",
      "DATE_ACHAT": null,
      "DATE_ANNULATION": null
    }
    this.c_client = {
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
  ionViewWillEnter() {
    this.listOfClients();

  }


  listOfClients() {
    this.clientPr.get_all_clients_name()
      .subscribe(
        res => {
          this.data = res;
          this.client = this.data.return;
        
            console.log("liste des clients", this.client)

        });
  };
  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.v_appart.NUM_CLIENT= event.value.NUM_CLIENT;
    console.log('c_client:', event.value);
  }

  
  async vendreAppart(projet$) {
    
    this.appartPr.vendre_appart(projet$)
      .subscribe(res => {
        console.log("wahmaaaa", this.v_appart);
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
