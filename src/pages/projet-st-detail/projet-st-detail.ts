import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { SousTraitantProjetProvider } from '../../providers/sous-traitant-projet/sous-traitant-projet';
import { ProjetStAjoutPayementPage } from '../projet-st-ajout-payement/projet-st-ajout-payement';
import { ProjetStDetailPayementPage } from '../projet-st-detail-payement/projet-st-detail-payement';

/**
 * Generated class for the ProjetStDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-st-detail',
  templateUrl: 'projet-st-detail.html',
})
export class ProjetStDetailPage {
  data:any;
  achat=[];
  NUM_PROJET:object;
  NUM_ST:object;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public st_Pr:SousTraitantProjetProvider,
    public alertCtrl:AlertController) {
      this.NUM_PROJET = this.navParams.get('num_p');
      this.NUM_ST=this.navParams.get('num_st');
  }

  ionViewWillEnter() {
    this.chargerDataApi();
  }

  chargerDataApi() {
    this.st_Pr.get_projet_sous_traitant_By_Num(this.NUM_PROJET,this.NUM_ST)
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.achat = this.data.return

        });
  };

  versementSt($NUM_PROJET,$ID){
    this.navCtrl.push(ProjetStAjoutPayementPage, { num_p: $NUM_PROJET,id:$ID });
    console.log('aVR',$ID)
  }
  detailPayement($ID){
    this.navCtrl.push(ProjetStDetailPayementPage, { id: $ID });
    console.log('aa',$ID)
  }


  deleteItem($ID){
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

            this.st_Pr.delete_sous_traitant_by_Id($ID)
              .subscribe(
                res => {
                  this.data = res;
                  console.log(this.data)

                  let alert = this.alertCtrl.create({
                    title: "Information",
                    subTitle: this.data['msg'],
                    buttons: ['OK']
                  });
                  alert.present();
                  console.log($ID);
                  this.navCtrl.pop();
                  
                });
                
          }
          
        }
      ]
    });

    
    alert.present();
  }

}
