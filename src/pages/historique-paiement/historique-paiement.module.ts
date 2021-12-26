import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoriquePaiementPage } from './historique-paiement';

@NgModule({
  declarations: [
    HistoriquePaiementPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoriquePaiementPage),
  ],
})
export class HistoriquePaiementPageModule {}
