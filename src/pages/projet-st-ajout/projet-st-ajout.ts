import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { sousTraitant } from '../../models/projet-st';
import { SousTraitantProjetProvider } from '../../providers/sous-traitant-projet/sous-traitant-projet';
import { SousTraitantProvider } from '../../providers/sous-traitant/sous-traitant';

/**
 * Generated class for the ProjetStAjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-st-ajout',
  templateUrl: 'projet-st-ajout.html',
})
export class ProjetStAjoutPage {
  aj_sous_traitant: sousTraitant;
  data: any;
  sousTraitant = [];
  NUM_PROEJT:object;
  NUM:object;
  tache=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    public st_pr: SousTraitantProjetProvider,
    public stprovider: SousTraitantProvider,
) {
    
      this.NUM_PROEJT=this.navParams.get('num_p');
      this.NUM =this.navParams.get('num_st');
   
    this.aj_sous_traitant = {
      "ID": null,
      "NUM_PROJET": this.NUM_PROEJT,
      "NUM_ST": this.NUM,
      "TACHE": null,
      "MONTANT": null,
      "DATE_A": null,
      "OBSERVATION": null
    }


  }
  ionViewWillEnter() {
    this.chargerDataApi();
    this.getAllTaches() ;
  }

  chargerDataApi() {
    this.stprovider.get_all_sous_traitants()
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.sousTraitant = this.data.return

        });
  };
  async getAllTaches() {
    this.stprovider.get_all_taches()
      .subscribe(
        res => {
          this.data = res;
          this.tache = this.data.return;
          console.log("tache", this.tache);

        });
  }

  async validerST(st$) {
    this.st_pr.add_sous_traitant_pr(st$)
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
      subTitle: 'Sous traitant ajouté avec succès !',
      cssClass: 'nomclient',
      buttons: ['ok']
    });
    alert.present();
  }


}
