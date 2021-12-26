import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjetEditPage } from './projet-edit';

@NgModule({
  declarations: [
    ProjetEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjetEditPage),
  ],
})
export class ProjetEditPageModule {}
