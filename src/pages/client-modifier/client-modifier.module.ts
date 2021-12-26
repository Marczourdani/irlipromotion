import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientModifierPage } from './client-modifier';

@NgModule({
  declarations: [
    ClientModifierPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientModifierPage),
  ],
})
export class ClientModifierPageModule {}
