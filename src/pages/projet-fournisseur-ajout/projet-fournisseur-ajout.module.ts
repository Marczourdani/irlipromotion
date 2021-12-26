import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjetFournisseurAjoutPage } from './projet-fournisseur-ajout';

@NgModule({
  declarations: [
    ProjetFournisseurAjoutPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjetFournisseurAjoutPage),
  ],
})
export class ProjetFournisseurAjoutPageModule {}
