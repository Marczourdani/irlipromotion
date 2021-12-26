import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { ClientProvider } from '../../providers/client/client';
import { ProjetProvider } from '../../providers/projet/projet';
import { ProjetClientAjoutPage } from '../projet-client-ajout/projet-client-ajout';
import { ProjetClientDetailPage } from '../projet-client-detail/projet-client-detail';

/**
 * Generated class for the ProjetClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-client',
  templateUrl: 'projet-client.html',
})
export class ProjetClientPage {
  data: any;
  NUM: object;
  NOM_DU_PROJET: object;
  client = [];
  GROUP_SEPARATOR=" ";
  searchMode = false;
  searchTerm: string=""
  query:string="";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public projetPr: ProjetProvider,
    public loadingCtrl: LoadingController,
    public clientPr:ClientProvider ) {

    this.NOM_DU_PROJET = this.navParams.get('data');
    this.NUM = this.navParams.get('data1');

    let loading = this.loadingCtrl.create({
      content: 'Chargement en cours ...'
    });
    loading.present();
    this.getProjectClients();
    loading.dismiss();
  }

  ionViewWillEnter() { this.getProjectClients(); }

  async getProjectClients() {
    this.projetPr.get_projet_clients(this.NUM)
      .subscribe(
        res => {
          this.data = res;
          this.client = this.data.return;
          console.log("les clients", this.client.length)
        });
  }

  goToFicheClient($NUM, $NUM_CLIENT, $NOM_CLIENT, $PRENOM) {
    this.navCtrl.push(ProjetClientDetailPage, { data1: $NUM, num_c: $NUM_CLIENT, nom_c: $NOM_CLIENT, prenom_c: $PRENOM })
  }


  addClient($NUM) {
    this.navCtrl.push(ProjetClientAjoutPage, { data: $NUM });
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
  this.clientPr.GetFeedSearching($search,this.NUM).subscribe(
    res => {
      this.data = res;
      this.client =this.data.return;
      console.log("tssss",this.client);
    })
}

search_client(search) {
  this.searchTerm = search;
  if (this.searchTerm == null || this.searchTerm =="") {
    this.searchMode = false;
    this.client = [];
    this.getProjectClients();
  } else {
    this.searchMode = true;
    this.client = [];
    console.log('sss',search);
    this.GetFeedSearchingLocal(search);
    
  
  }
}
}
