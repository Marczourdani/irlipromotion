import { Component } from '@angular/core';
import { AlertController, IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { FournisseurProvider } from '../../providers/fournisseur/fournisseur';
import { FournisseurAjoutPage } from '../fournisseur-ajout/fournisseur-ajout';
import { FournisseurEditPage } from '../fournisseur-edit/fournisseur-edit';
import { FournisseurFichePage } from '../fournisseur-fiche/fournisseur-fiche';

/**
 * Generated class for the FournisseurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fournisseur',
  templateUrl: 'fournisseur.html',
})
export class FournisseurPage {
  data: any;
  fournisseur = [];
  NUM_FOURNISSEUR: object;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fournisseurPr: FournisseurProvider,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController) {


  }

  ionViewWillEnter() {
    this.chargerDataApi();
  }

  chargerDataApi() {
    this.fournisseurPr.get_all_fournisseurs()
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.fournisseur = this.data.return

        });
  };
  detailFournisseur($NUM_FOURNISSEUR) {
    const modal = this.modalCtrl.create(FournisseurFichePage, { num_f: $NUM_FOURNISSEUR });
    modal.present();
  }
  modifierfournisseur($NUM_FOURNISSEUR) {
    this.navCtrl.push(FournisseurEditPage, { num_f: $NUM_FOURNISSEUR });
  }

  ajouterFournisseur() {
    this.navCtrl.push(FournisseurAjoutPage);
  }





  supprimerfournisseur($NUM_FOURNISSEUR) {
    let alert = this.alertCtrl.create({
      title: 'qsdqs',
      message: 'Voulez vous supprimer ce Fournisseur ?',
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

            this.fournisseurPr.delete_fournisseur_by_num($NUM_FOURNISSEUR)
              .subscribe(
                res => {
                  this.data = res;

                  let alert = this.alertCtrl.create({
                    title: "Information",
                    message: "Fournisseur supprimé",
                    subTitle: this.data['msg'],
                    buttons: ['OK']
                  });
                  alert.present();
                  console.log($NUM_FOURNISSEUR);
                  this.chargerDataApi();
                });
          }
        }
      ]
    });
    alert.present();
  }

}
