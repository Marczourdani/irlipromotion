import { Component } from '@angular/core';
import { AlertController, IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { SousTraitantProvider } from '../../providers/sous-traitant/sous-traitant';
import { SousTraitAjoutPage } from '../sous-trait-ajout/sous-trait-ajout';
import { SousTraitEditPage } from '../sous-trait-edit/sous-trait-edit';
import { SousTraitFichePage } from '../sous-trait-fiche/sous-trait-fiche';

/**
 * Generated class for the SousTraitantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sous-traitant',
  templateUrl: 'sous-traitant.html',
})
export class SousTraitantPage {
  data:any;
  soustrait=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public sousTraitantPr:SousTraitantProvider,
    public alertCtrl:AlertController,
    public modalCtrl:ModalController
    ) {
  }

  ionViewWillEnter(){
    this.chargerDataApi() ;
  }

  chargerDataApi() {
    this.sousTraitantPr.get_all_sous_traitants()
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.soustrait = this.data.return

        });
  };
  ajouterSouTraitant(){
    this.navCtrl.push(SousTraitAjoutPage);
  }

  supprimerSousTrait($NUM){
    let alert = this.alertCtrl.create({
      title: 'qsdqs',
      message: 'Voulez vous supprimer le sous traitant ?',
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

            this.sousTraitantPr.delete_sous_traitant_by_num($NUM)
              .subscribe(
                res => {
                  this.data = res;

                  let alert = this.alertCtrl.create({
                    title: "Information",
                   // message: "Sous traitant supprimé",
                    subTitle: this.data['msg'],
                    buttons: ['OK']
                  });
                  alert.present();
                  console.log($NUM);
                  this.chargerDataApi();
                });
          }
        }
      ]
    });
    alert.present();
  }
  
  detailSousTrait($NUM){
    const modal = this.modalCtrl.create(SousTraitFichePage,{num_s:$NUM});
    modal.present();
  }
  modifierSousTrait($NUM){
    this.navCtrl.push(SousTraitEditPage,{num_s:$NUM})
  }
}
