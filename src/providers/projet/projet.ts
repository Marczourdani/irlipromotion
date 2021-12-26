import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { projet } from '../../models/client/projet.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8'})
};

@Injectable()
export class ProjetProvider {
  baseUrl = 'http://localhost/immobilier';
  projet = [];
  constructor(public http: HttpClient) {
    console.log('Hello ProjetProvider Provider');
  }

  /* Ajouter  un  nouveau  projet  */

  ajout_projet(data): Observable<any> {
    const url = `${this.baseUrl}/projet/ajoutProjet.php`;

    console.log("Service", data);
    return this.http.post(url, data, httpOptions).pipe();
  }


  /* Récupérer tout les projets */

  getAllProjects() {
    return this.http.get<projet[]>(`${this.baseUrl}/projet/getAllProjects.php`).
      pipe(map((res: projet[]) => {
        this.projet = res;
        return this.projet;
      }),
        catchError(this.handleError));
  }


  /* recuperer un Projet par son numéro */

  get_projet_par_num($NUM) {
    const url = `${this.baseUrl}/projet/getProjectByNum.php`;

    return this.http.post(url, { "NUM": $NUM }, httpOptions).pipe();
  }

  /*Supprimer un projet  */

  delete_projet_by_num($NUM) {
    const url = `${this.baseUrl}/projet/deleteProjet.php`;
    console.log($NUM);
    return this.http.post(url, { "NUM": $NUM }, httpOptions).pipe();
  }

  /* recupérer les clients dans un seul projet*/

  get_projet_clients($NUM) {
    const url = `${this.baseUrl}/projet/getProjetClients.php`;
    return this.http.post(url, { "NUM": $NUM }, httpOptions).pipe();
  }

   /* mettre à jour  les informations du  projet*/

  update_projet(data): Observable<any> {
    const url = `${this.baseUrl}/projet/updateProjet.php`;
    console.log(data);
    return this.http.post(url, data, httpOptions).pipe();
  }

/* Rechercher un projet  */

GetFeedSearching($search) {
  const url = `${this.baseUrl}/projet/searchProjet.php`;
  //console.log("search term", $search);
  return this.http.post(url,{ 'search': $search },httpOptions).pipe();
}







  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }
}
