import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { AppartementProvider } from '../../providers/appartement/appartement';
import { ClientVenteAppartPage } from '../client-vente-appart/client-vente-appart';
import { HistoriquePaiementPage } from '../historique-paiement/historique-paiement';
import { VersementClientAppartPage } from '../versement-client-appart/versement-client-appart';

/**
 * Generated class for the ProjetClientDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-client-detail',
  templateUrl: 'projet-client-detail.html',
})
export class ProjetClientDetailPage {
  NUM: object;
  NOM_DU_PROJET: object;
  NUM_CLIENT: object;
  NOM_CLIENT:object;
  PRENOM_CLIENT:object;
  show_achete = true;
  show_annule = false;
  showetat: any;
  data: any;
  appartement = [];
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public appartPr: AppartementProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl:AlertController) {

    this.NOM_DU_PROJET = this.navParams.get('data');
    this.NUM = this.navParams.get('data1');
    this.NUM_CLIENT = this.navParams.get('num_c');
    this.NOM_CLIENT = this.navParams.get('nom_c');
    this.PRENOM_CLIENT = this.navParams.get('prenom_c');
    let loading = this.loadingCtrl.create({
      content: 'Chargement en cours ...'
    });
    loading.present();
    this.getAppart(this.showetat);
    loading.dismiss();
  

    
  }

  ionViewWillEnter() { 
    
    this.getAppart(this.showetat);
   }

  getAppart(etat) {
    this.showetat = etat;

    switch (this.showetat) {
      case 1:
        this.show_achete = true;
        this.show_annule = false;
        this.appartPr.get_appart_client(this.NUM, this.NUM_CLIENT, this.showetat)
          .subscribe(
            res => {
              this.data = res;
              this.appartement = this.data.return;
              console.log("les appartements", this.appartement.length)
            });
        ;
        break;

      case 0:
        this.show_annule = true;
        this.show_achete = false;
        this.appartPr.get_appart_client(this.NUM, this.NUM_CLIENT, this.showetat)
          .subscribe(
            res => {
              this.data = res;
              this.appartement = this.data.return;
              console.log("les appartements", this.appartement.length)
            });
        break;
    }

  }

  vendreAppart($NUM,$NUM_CLIENT){
    this.navCtrl.push(ClientVenteAppartPage,{data:$NUM,num_c:$NUM_CLIENT})
  }

  annulerAchat($c_client,$num_b) {
    let alert = this.alertCtrl.create({
      title: 'qsdqs',
      message: 'Voulez vous annuler cette vente ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confimer',
          handler: () => {

            this.appartPr.annuler_vente_appart($c_client,$num_b)
              .subscribe(
                res => {
                  this.data = res;
                  // console.log('code client', $c_client);
                  console.log('code client', this.data);
                  let alert = this.alertCtrl.create({
                    title: "Information",

                    subTitle: this.data['msg'],
                    buttons: ['OK']
                  });
                  alert.present();
                  this.getAppart(this.showetat);

                });
          }
        }
      ]
    });
    alert.present();
  }


  versement($ID_TRANS) {

    this.navCtrl.push(VersementClientAppartPage,{id_trans:$ID_TRANS})
  }


  historique($ID_TRANS){
    this.navCtrl.push(HistoriquePaiementPage,{id_trans:$ID_TRANS});
  }

  

}
