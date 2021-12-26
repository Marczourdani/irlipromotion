import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { fournisseur } from '../../models/projet-fournisseur.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
};
@Injectable()
export class ProjetFournisseurProvider {
  baseUrl = 'http://localhost/immobilier';
  fournisseur = [];
  constructor(public http: HttpClient) {
    console.log('Hello ProjetFournisseurProvider Provider');
  }


  get_all_projet_fournisseurs($NUM_PROJET) {
    const url = `${this.baseUrl}/fournisseur-projet/getAllProjetFournisseur.php`;
    return this.http.post(url, { "NUM_PROJET": $NUM_PROJET }, httpOptions).pipe();
  }
  
  add_fournisseur_pr(data): Observable<any> {
    const url = `${this.baseUrl}/fournisseur-projet/addFournisseurProjet.php`;

    console.log(data);
    return this.http.post(url, data, httpOptions).pipe();
  }

  get_all_achat_fournisseur($NUM_PROJET,$NUM_FOURNISSEUR) {
    const url = `${this.baseUrl}/fournisseur-projet/getAchatByNumFournisseur.php`;
    console.log($NUM_PROJET,$NUM_FOURNISSEUR);
    return this.http.post(url, { "NUM_PROJET": $NUM_PROJET,"NUM_FOURNISSEUR": $NUM_FOURNISSEUR }, httpOptions).pipe();
  }

  //payement fournisseur
  add_payement_fournisseur(data): Observable<any> {
    const url = `${this.baseUrl}/fournisseur-projet/addPayementFournisseur.php`;

    console.log('paye fournisseur',data);
    return this.http.post(url, data, httpOptions).pipe();
  }

  GetFeedSearching($search,$NUM) {
    const url = `${this.baseUrl}/fournisseur-projet/searchFournisseur.php`;
    //console.log("search term", $search);
    return this.http.post(url,{ 'search': $search, 'NUM': $NUM  },httpOptions).pipe();
  }
  

  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }
}
