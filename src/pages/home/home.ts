import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClientPage } from '../client/client';
import { ProjetPage } from '../projet/projet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController) {

  }

}
