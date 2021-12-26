import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { appartement } from '../../models/appartement.model';
import { vente } from '../../models/vente.model';

import { AppartementProvider } from '../../providers/appartement/appartement';

/**
 * Generated class for the ClientVenteAppartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-vente-appart',
  templateUrl: 'client-vente-appart.html',
})
export class ClientVenteAppartPage {
  appartement = [];
  data: any;
  v_appart: appartement;
  vente_appart:vente;
  NUM: object;
  NUM_CLIENT:object;
  NUM_BIEN:object;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public AppartPr: AppartementProvider,
    public alertCtrl:AlertController) {
    this.NUM = this.navParams.get('data');
    this.NUM_CLIENT = this.navParams.get('num_c');
    this.NUM_BIEN = this.navParams.get('num_b');
    
    this.v_appart = {
      "NUM_BIEN": null,
      "NUM_PROJET": null,
      "CODE_BLOC": null,
      "CODE_BIEN": null,
      "ETAGE": null,
      "TAILLE": null,
      "ETAT": null,
      "SUPERFICE": null,
      "PRIX_TOT_1": null,
      "PRIX_TOT_2": null,
      "nbr": null

    }
    this.vente_appart = {
      "ID_TRANS": null,
      "NUM_BIEN":  null,
      "NUM_CLIENT": this.NUM_CLIENT,
      "ETAT_TRANS": "1",
      "DATE_ACHAT": null,
      "DATE_ANNULATION": null
    }
  }
  ionViewWillEnter() {
    this.listOfAppart();

  }

  listOfAppart(): void {
    this.AppartPr.get_free_appartement(this.NUM)
      .subscribe(
        res => {
          this.data = res;
          this.appartement = this.data.return;

          console.log("free appart", this.appartement)

        });
  };
  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
   this.vente_appart.NUM_BIEN = event.value.NUM_BIEN;
    console.log('v_appart:', event.value);
  }

  async vendreAppart(projet$) {
    
    this.AppartPr.vendre_appart_client(projet$)
      .subscribe(res => {
        console.log("wahmaaaa", this.vente_appart);
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
