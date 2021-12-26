import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SousTraitAjoutPage } from './sous-trait-ajout';

@NgModule({
  declarations: [
    SousTraitAjoutPage,
  ],
  imports: [
    IonicPageModule.forChild(SousTraitAjoutPage),
  ],
})
export class SousTraitAjoutPageModule {}
