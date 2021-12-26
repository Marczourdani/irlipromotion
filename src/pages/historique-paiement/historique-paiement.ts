import { Component } from '@angular/core';
import { Alert, AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppartementProvider } from '../../providers/appartement/appartement';

/**
 * Generated class for the HistoriquePaiementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historique-paiement',
  templateUrl: 'historique-paiement.html',
})
export class HistoriquePaiementPage {
  data: any;
  historique = [];
  ID_TRANS: object;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public appartPr: AppartementProvider,
    public alertCtrl: AlertController) {
    this.ID_TRANS = this.navParams.get('id_trans');
  }

  ionViewWillEnter() {
    this.chargerDataApi();
  }
  chargerDataApi() {
    this.appartPr.get_historique_versement(this.ID_TRANS)
      .subscribe(
        res => {
          this.data = res;
          console.log('efe', this.data)
          this.historique = this.data.return;

  

        });
  };

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

}
