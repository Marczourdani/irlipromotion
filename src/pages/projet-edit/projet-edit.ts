import { Component } from '@angular/core';
import { Console } from '@angular/core/src/console';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { projet } from '../../models/client/projet.model';

import { ProjetProvider } from '../../providers/projet/projet';

/**
 * Generated class for the ProjetEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-edit',
  templateUrl: 'projet-edit.html',
})
export class ProjetEditPage {
  data: any;
  NUM: object;
  aj_projet: projet;
  client = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl:AlertController,
    public projetPr: ProjetProvider) {

    this.NUM = this.navParams.get('data');
    this.aj_projet = {
      "NUM": this.NUM,
      "NOM_DU_PROJET": null,
      
      "DATE_DEBUT_PROJET": new Date().toISOString(),
      "DATE_FIN_PROJET": new Date().toISOString(),
      
      "DELAI_REALISATION": null,
      "ADRESSE": null,
      "NOMBRE_BLOC": null

    }
  }

  
  validerProjet($projet) {
    this.projetPr.update_projet($projet)
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

  ngOnInit(){this.getProjetByNum();}

  async getProjetByNum() {
    this.projetPr.get_projet_par_num(this.NUM)
      .subscribe(
        res => {
          this.data = res;

          this.aj_projet = {
            "NUM": this.NUM,
            "NOM_DU_PROJET": this.data.return[0].NOM_DU_PROJET,
            "ADRESSE": this.data.return[0].ADRESSE,
            "DATE_DEBUT_PROJET":this.data.return[0].DATE_DEBUT_PROJET,
            "DATE_FIN_PROJET":this.data.return[0].DATE_FIN_PROJET,
            "NOMBRE_BLOC":this.data.return[0].NOMBRE_BLOC,
            "DELAI_REALISATION":this.data.return[0].DELAI_REALISATION,

        };
        console.log('dsjkj', this.data.return[0].DELAI_REALISATION);


        });
  }



}
