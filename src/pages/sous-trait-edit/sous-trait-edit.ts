import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { soustraitant } from '../../models/sous-traitant.model';
import { SousTraitantProvider } from '../../providers/sous-traitant/sous-traitant';

/**
 * Generated class for the SousTraitEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sous-trait-edit',
  templateUrl: 'sous-trait-edit.html',
})
export class SousTraitEditPage {
  NUM_ST:object;
  aj_sous_trait:soustraitant;
  data:any;
  tache=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl:AlertController,
    public sousTraitantPr: SousTraitantProvider) {
    this.NUM_ST= this.navParams.get('num_s');
    this.aj_sous_trait ={
      "NUM": null,
      "NOM": null,
      "PRENOM": null,
      "DATE_NAISS": new Date().toISOString(),
      "ADRESSE": null,
      "EMAIL": null,
      "TEL": null,
      "TACHE_PRINCIPAL": null
 
    }
  }
  ionViewWillEnter() {
    this.getSousTraitantByNum();
    this.getAllTaches();
  
  }

  async getAllTaches() {
    this.sousTraitantPr.get_all_taches()
      .subscribe(
        res => {
          this.data = res;
          this.tache = this.data.return;
          console.log("tache", this.tache);

        });
  }

  async getSousTraitantByNum() {
    this.sousTraitantPr.get_sous_traitant_by_num(this.NUM_ST)
      .subscribe(
        res => {
          this.data = res;
          this.aj_sous_trait ={
            "NUM": this.NUM_ST,
            "NOM": this.data.return[0].NOM,
            "PRENOM": this.data.return[0].PRENOM,
            "DATE_NAISS": this.data.return[0].DATE_NAISS,
            "ADRESSE": this.data.return[0].ADRESSE,
            "EMAIL": this.data.return[0].EMAIL,
            "TEL": this.data.return[0].TEL,
            "TACHE_PRINCIPAL": this.data.return[0].TACHE_PRINCIPAL
           
          }

        });
  }

  validerSousTraitant($st) {
    this.sousTraitantPr.update_sous_traitant($st)
      .subscribe(res => {

        this.data = res;
       
    
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
