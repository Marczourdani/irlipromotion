import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { fournisseur } from '../../models/fournisseur.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
};
@Injectable()
export class FournisseurProvider {
  baseUrl = 'http://localhost/immobilier';
  fournisseur = [];
  constructor(public http: HttpClient) {
    console.log('Hello FournisseurProvider Provider');
  }
  //afficher tout les fournisseurs

  get_all_fournisseurs() {
    return this.http.get<fournisseur[]>(`${this.baseUrl}/fournisseur/getAllFournisseur.php`).
      pipe(map((res: fournisseur[]) => {
        this.fournisseur = res;
        return this.fournisseur;
      }),
        catchError(this.handleError));
  }

  /*ajouter  un fournisseur  */
  add_fournisseur(data): Observable<any> {
    const url = `${this.baseUrl}/fournisseur/addFournisseur.php`;

    console.log(data);
    return this.http.post(url, data, httpOptions).pipe();
  }
  /*Supprimer un fournisseur  */

  delete_fournisseur_by_num($NUM_FOURNISSEUR) {
    const url = `${this.baseUrl}/fournisseur/deleteFournisseur.php`;
    console.log($NUM_FOURNISSEUR);
    return this.http.post(url, { "NUM_FOURNISSEUR": $NUM_FOURNISSEUR }, httpOptions).pipe();
  }
  get_fournisseur_by_num($NUM_FOURNISSEUR) {
    const url = `${this.baseUrl}/fournisseur/getFournisseurByNum.php`;
    return this.http.post(url, { "NUM_FOURNISSEUR": $NUM_FOURNISSEUR }, httpOptions).pipe();
  }

  update_fournisseur(data): Observable<any> {
    const url = `${this.baseUrl}/fournisseur/updateFournisseur.php`;
    console.log(data);
    return this.http.post(url, data, httpOptions).pipe();
  }
  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }
}
