import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FournisseurEditPage } from './fournisseur-edit';

@NgModule({
  declarations: [
    FournisseurEditPage,
  ],
  imports: [
    IonicPageModule.forChild(FournisseurEditPage),
  ],
})
export class FournisseurEditPageModule {}
