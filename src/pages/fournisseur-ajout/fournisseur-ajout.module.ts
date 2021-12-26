import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FournisseurAjoutPage } from './fournisseur-ajout';

@NgModule({
  declarations: [
    FournisseurAjoutPage,
  ],
  imports: [
    IonicPageModule.forChild(FournisseurAjoutPage),
  ],
})
export class FournisseurAjoutPageModule {}
