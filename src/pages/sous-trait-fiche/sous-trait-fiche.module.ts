import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SousTraitFichePage } from './sous-trait-fiche';

@NgModule({
  declarations: [
    SousTraitFichePage,
  ],
  imports: [
    IonicPageModule.forChild(SousTraitFichePage),
  ],
})
export class SousTraitFichePageModule {}
