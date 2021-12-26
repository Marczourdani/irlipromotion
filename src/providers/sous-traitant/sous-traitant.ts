import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Console } from '@angular/core/src/console';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { soustraitant } from '../../models/sous-traitant.model';
import { tache } from '../../models/tache.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
};
@Injectable()
export class SousTraitantProvider {
  baseUrl = 'http://localhost/immobilier';
  soustrait=[];
  tache=[];

  constructor(public http: HttpClient) {
    console.log('Hello SousTraitantProvider Provider');
  }

  get_all_sous_traitants(){
    return this.http.get<soustraitant[]>(`${this.baseUrl}/sous-traitant/getAllSousTraitants.php`).
      pipe(map((res: soustraitant[]) => {
        this.soustrait = res;
        return this.soustrait;
      }),
        catchError(this.handleError));
  }

  get_all_taches(){
    return this.http.get<tache[]>(`${this.baseUrl}/sous-traitant/getAllTache.php`).
      pipe(map((res: tache[]) => {
        this.tache = res;
        console.log('tacheee',this.tache)
        return this.tache;
      }),
        catchError(this.handleError));
  }



  //ajouter  un sous traitant 
  add_sous_traitant(data): Observable<any> {
    const url = `${this.baseUrl}/sous-traitant/addSousTraitant.php`;

    console.log(data);
    return this.http.post(url, data, httpOptions).pipe();
  }
  //Supprimer un sous traitant

  delete_sous_traitant_by_num($NUM) {
    const url = `${this.baseUrl}/sous-traitant/deleteSousTraitant.php`;
    console.log($NUM);
    return this.http.post(url, { "NUM": $NUM }, httpOptions).pipe();
  }


  get_sous_traitant_by_num($NUM) {
    const url = `${this.baseUrl}/sous-traitant/getSousTraitantByNum.php`;
    return this.http.post(url, { "NUM": $NUM }, httpOptions).pipe();
  }

// modifier le sous traitant
  update_sous_traitant(data): Observable<any> {
    const url = `${this.baseUrl}/sous-traitant/updateSousTraitant.php`;
    console.log(data);
    return this.http.post(url, data, httpOptions).pipe();
  }
  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }

}
