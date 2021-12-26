import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FournisseurFichePage } from './fournisseur-fiche';

@NgModule({
  declarations: [
    FournisseurFichePage,
  ],
  imports: [
    IonicPageModule.forChild(FournisseurFichePage),
  ],
})
export class FournisseurFichePageModule {}
