import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { ProjetProvider } from '../../providers/projet/projet';
import { ProjetAjoutPage } from '../projet-ajout/projet-ajout';
import { ProjetDetailPage } from '../projet-detail/projet-detail';
import { ProjetEditPage } from '../projet-edit/projet-edit';

/**
 * Generated class for the ProjetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet',
  templateUrl: 'projet.html',
})
export class ProjetPage {

  projet = [];
  NUM: object;
  data: any;
  searchMode = false;
  searchTerm: string=""
  query:string="";

  // NOM_DU_PROJET: object;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public projetPr: ProjetProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

    this.NUM = this.navParams.data;

    let loading = this.loadingCtrl.create({
      content: 'Chargement en cours ...'
    });
    loading.present();
    if(this.searchMode == false){
      this.chargerDataApi();
    }
    loading.dismiss();
  }

  ionViewWillEnter() {
   
    this.chargerDataApi();
    
    
   }

 

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.chargerDataApi();
      refresher.complete();
    }, 2000);
  }

  /* Récupérer tout les projets*/
  chargerDataApi() {
    this.projetPr.getAllProjects()
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.projet = this.data.return

        });
  };


  /* Ajouter  un  nouveau projet*/
  ajoutprojet() {
    this.navCtrl.push(ProjetAjoutPage)
  }

  modifierProjet($NUM) {
    this.navCtrl.push(ProjetEditPage, { data: $NUM });
  }

  /* détail  du  projet - en parametre nom et numéro du projet */
  detailProjet($NOM_DU_PROJET, $NUM) {
    this.navCtrl.push(ProjetDetailPage, { data: $NOM_DU_PROJET, data1: $NUM });
  }

  suprimerProjet($NUM) {

    let alert = this.alertCtrl.create({
     title:"Information",
     subTitle: 'Voulez vous supprimer ce Projet ?',
      cssClass: 'profalert',
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

            this.projetPr.delete_projet_by_num($NUM)
              .subscribe(
                res => {
                  this.data = res;

                  let alert = this.alertCtrl.create({
                    title: "Information",
                    subTitle: this.data['msg'],
                    cssClass: 'profalert',
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

   GetFeedSearchingLocal($search){
    this.projetPr.GetFeedSearching($search).subscribe(
      res => {
        this.data = res;
        this.projet =this.data.return;
        console.log("tssss",this.projet);
      })
  }
  
  search_projet(search) {
    this.searchTerm = search;
    if (this.searchTerm == null || this.searchTerm =="") {
      this.searchMode = false;
      this.projet = [];
      this.chargerDataApi();
    } else {
      this.searchMode = true;
      this.projet = [];
      console.log('sss',search);
      this.GetFeedSearchingLocal(search);
      
    
    }
  }
}
