import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { appartement } from '../../models/appartement.model';
import { client } from '../../models/client.model';
import { vente } from '../../models/vente.model';
import { AppartementProvider } from '../../providers/appartement/appartement';



import { ClientProvider } from '../../providers/client/client';
import { ProjetProvider } from '../../providers/projet/projet';

/**
 * Generated class for the ProjetClientAjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-client-ajout',
  templateUrl: 'projet-client-ajout.html',
})
export class ProjetClientAjoutPage {
data:any;
client =[];
NUM:object;
v_appart:vente;
c_client:client;
aj_appart:appartement;
appartement=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public projetPr:ProjetProvider, public clientPr:ClientProvider,
    public AppartPr:AppartementProvider) {

  this.NUM = this.navParams.get('data');
   
  this.v_appart = {
    "ID_TRANS": null,
    "NUM_BIEN":  null,
    "NUM_CLIENT": null,
    "ETAT_TRANS": "1",
    "DATE_ACHAT": null,
    "DATE_ANNULATION": null
  }
  this.c_client = {
    "NUM_CLIENT": null,
    "NOM": null,
    "PRENOM": null,
    "DATE_NAISS": null,
    "ADRESSE_CLIENT": null,
    "EMAIL_CLIENT": null,
    "TEL_CLIENT": null,
    "METIER": null

  }
  
}
ionViewWillEnter() {
  this.listOfClients();
  this.listOfAppart();

}


listOfClients() {
  this.clientPr.get_all_clients_name()
    .subscribe(
      res => {
        this.data = res;
        this.client = this.data.return;
      
          console.log("liste des clients", this.client)

      });
};
listOfAppart(){
  this.AppartPr.get_free_appartement(this.NUM)
    .subscribe(
      res => {
        this.data = res;
        this.appartement = this.data.return;

        console.log("free appart", this.appartement)

      });
};
portChange(event: {
  component: IonicSelectableComponent,
  value: any
}) {
  this.v_appart.NUM_CLIENT= event.value.NUM_CLIENT;


  console.log('c_client:', event.value);
}

portChangeA(event: {
  component: IonicSelectableComponent,
  valuee: any
}) {
  
  this.v_appart.NUM_BIEN = event.valuee.NUM_BIEN;

  console.log('c_client:', event.valuee);
}

}
