import { Component } from '@angular/core';
import { Console } from '@angular/core/src/console';
import { C } from '@angular/core/src/render3';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { appartement } from '../../models/appartement.model';
import { versement } from '../../models/versement.model';
import { AppartementProvider } from '../../providers/appartement/appartement';
import { ProjerAppartVentePage } from '../projer-appart-vente/projer-appart-vente';
import { ProjetAppartAjoutPage } from '../projet-appart-ajout/projet-appart-ajout';
import { VersementClientAppartPage } from '../versement-client-appart/versement-client-appart';


/**
 * Generated class for the ProjetAppartementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-appartement',
  templateUrl: 'projet-appartement.html',
})
export class ProjetAppartementPage {
  data: any;
  appartement = [];
  bloc = [];
  bloc1 = [];
  bloc2 = [];
  NUM: object;
  NOM_DU_PROJET: object;
  aj_appart: appartement;
  aj_versement: versement;
  c_bloc: any;
  selected = false;
  selected_data = true;
  valueEtat: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public appartPr: AppartementProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

    this.NOM_DU_PROJET = this.navParams.get('data');
    this.NUM = this.navParams.get('data1');

    this.aj_appart = {
      "NUM_BIEN": null,
      "NUM_PROJET": this.NUM,
      "CODE_BLOC": null,
      "CODE_BIEN": null,
      "ETAGE": null,
      "TAILLE": null,
      "ETAT": 0,
      "SUPERFICE": null,
      "PRIX_TOT_1": null,
      "PRIX_TOT_2": null,
      "nbr": null



    }

    this.aj_versement = {
      "ID_PAYE_CLIENT": null,
      "NUM_COMPTE": 1,
      "ID_TRANS": 26,
      "OBSERVATION": null,
      "DATE_P": null,
      "DEBIT": null,
      "CREDIT": 350,
      "MONTANT_REMBOURSE": null,
      "MONTANT_PAYE": 350
    }
  }

  ionViewWillEnter() {
    this.getProjectAppartements();
    this.getProjectBloc();
    this.getAppartBybloc(this.c_bloc)
  }

  async getProjectAppartements() {
    this.appartPr.get_projet_appartements(this.NUM)
      .subscribe(
        res => {
          this.data = res;
          this.bloc2 = this.data.return;
          console.log("cc", this.appartement);
        });
  }

  async getProjectBloc() {
    this.appartPr.get_projet_bloc(this.NUM)
      .subscribe(
        res => {
          this.data = res;
          this.bloc = this.data.return;
          console.log("bloc", this.bloc);

        });
  }

  async getAppartBybloc($search) {
    this.appartPr.get_projet_appartement_bloc(this.NUM, $search)
      .subscribe(
        res => {
          this.data = res;
          this.bloc2 = this.data.return;
          this.c_bloc = this.aj_appart.CODE_BLOC;
        }
      );

  }
  async getAppartByblocEtat($bloc, $value) {
    this.appartPr.get_projet_appartement_bloc_etat(this.NUM, $bloc, $value)
      .subscribe(
        res => {
          this.data = res;

          this.appartement = this.data.return;
          console.log("databatata", this.appartement.length);

        }
      );

  }
  filterItem(bloc, etat) {
    this.valueEtat = etat;
    this.selected = true;
    this.c_bloc = bloc;

    if (!this.c_bloc.length) {
      this.bloc2 = [];
      this.getProjectAppartements()
    } else {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading.present();
      this.getAppartBybloc(this.c_bloc);
      setTimeout(() => {
        loading.dismiss();
      }, 1000);


    } if (!this.c_bloc.length && !this.valueEtat.length)
      this.bloc2 = [];
    this.getAppartByblocEtat(this.c_bloc, this.valueEtat);

  }

  filterItemEtat(bloc, etat) {
    this.selected_data = false
    this.c_bloc = bloc;
    this.valueEtat = etat;
    this.appartement = [];
    this.getAppartByblocEtat(this.c_bloc, this.valueEtat);
  }


  addAppart($NOM_DU_PROJET, $NUM) {
    this.navCtrl.push(ProjetAppartAjoutPage, { data: $NOM_DU_PROJET, data1: $NUM });
  }
  vendreAppart($NUM_BIEN, $NUM) {
    this.navCtrl.push(ProjerAppartVentePage, { data: $NUM_BIEN, data1: $NUM });
    console.log('num bien', $NUM)
  }

  versement($ID_TRANS) {
    console.log("lala",$ID_TRANS);
    this.navCtrl.push(VersementClientAppartPage, { id_trans: $ID_TRANS });
  }


  annulerAchat($c_client, $num_b) {
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

            this.appartPr.annuler_vente_appart($c_client, $num_b)
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
                  this.getAppartByblocEtat(this.c_bloc, this.valueEtat);

                });
          }
        }
      ]
    });
    alert.present();
  }


}
