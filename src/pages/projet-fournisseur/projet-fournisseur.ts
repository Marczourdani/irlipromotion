import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetFournisseurProvider } from '../../providers/projet-fournisseur/projet-fournisseur';
import { ProjetFournisseurAchatPage } from '../projet-fournisseur-achat/projet-fournisseur-achat';
import { ProjetFournisseurAchatPageModule } from '../projet-fournisseur-achat/projet-fournisseur-achat.module';
import { ProjetFournisseurAjoutPage } from '../projet-fournisseur-ajout/projet-fournisseur-ajout';
import { ProjetFournisseurPayementPage } from '../projet-fournisseur-payement/projet-fournisseur-payement';

/**
 * Generated class for the ProjetFournisseurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-fournisseur',
  templateUrl: 'projet-fournisseur.html',
})
export class ProjetFournisseurPage {
  NOM_DU_PROJET: object;
  NUM_PROJET: object;
  data:any;
  fournisseur=[];
  GROUP_SEPARATOR=" ";
  searchMode = false;
  searchTerm: string=""
  query:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fournisseurPr:ProjetFournisseurProvider) {
    this.NOM_DU_PROJET = this.navParams.get('data');
    this.NUM_PROJET = this.navParams.get('data1');
  }

ionViewWillEnter()
 {
  this.chargerDataApi();
   
  }

  chargerDataApi() {
    this.fournisseurPr.get_all_projet_fournisseurs(this.NUM_PROJET)
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.fournisseur = this.data.return

        });
  };

  ajouterFournisseur($NUM_PROJET,$NUM_FOURNISSEUR){
    this.navCtrl.push(ProjetFournisseurAjoutPage,{num_pr:$NUM_PROJET, num_fr:$NUM_FOURNISSEUR});
  }
  detailAchat($NUM_PROJET,$NUM_FOURNISSEUR){
    this.navCtrl.push(ProjetFournisseurAchatPage,{num_pr:$NUM_PROJET, num_fr:$NUM_FOURNISSEUR});
  }
  versementFr($NUM_PROJET,$NUM_FOURNISSEUR){
    this.navCtrl.push(ProjetFournisseurPayementPage,{num_pr:$NUM_PROJET, num_fr:$NUM_FOURNISSEUR});
  }  
  
  Achatfournisseur($NUM_PROJET,$NUM_FOURNISSEUR){
    this.navCtrl.push(ProjetFournisseurAjoutPage,{num_pr:$NUM_PROJET, num_fr:$NUM_FOURNISSEUR});
  }

  format(valString) {
    if (!valString) {
        return '';
    }
    let val = valString.toString();
    const parts = val.replace(/ /g, '');
    return parts.replace(/\B(?=(?:\w{3})+(?!\w))/g, this.GROUP_SEPARATOR) 
};


GetFeedSearchingLocal($search){
  this.fournisseurPr.GetFeedSearching($search,this.NUM_PROJET).subscribe(
    res => {
      this.data = res;
      this.fournisseur =this.data.return;
      console.log("tssss",this.fournisseur);
    })
}

search_fournisseur(search) {
  this.searchTerm = search;
  if (this.searchTerm == null || this.searchTerm =="") {
    this.searchMode = false;
    this.fournisseur = [];
    this.chargerDataApi();
  } else {
    this.searchMode = true;
    this.fournisseur = [];
    console.log('sss',search);
    this.GetFeedSearchingLocal(search);
    
  
  }
}
}
