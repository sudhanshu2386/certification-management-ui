import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Certification } from './certification';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class CertificationService {
	private certURL = 'api/certifications';
	
	httpOptions = {
    	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  	};
  
  	constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    
    /** GET certifications from the server */
  getCertifications(): Observable<Certification[]> {
    return this.http.get<Certification[]>(this.certURL)
      .pipe(
        tap(_ => this.log('fetched certifications')),
        catchError(this.handleError<Certification[]>('getCertifications', []))
      );
  }

  /** GET certification by id. Return `undefined` when id not found */
  getCertificationNo404<Data>(id: number): Observable<Certification> {
    const url = `${this.certURL}/?id=${id}`;
    return this.http.get<Certification[]>(url)
      .pipe(
        map(certifications => certifications[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} certification id=${id}`);
        }),
        catchError(this.handleError<Certification>(`getCertification id=${id}`))
      );
  }

  /** GET certification by id. Will 404 if id not found */
  getCertification(id: number): Observable<Certification> {
    const url = `${this.certURL}/${id}`;
    return this.http.get<Certification>(url).pipe(
      tap(_ => this.log(`fetched certification id=${id}`)),
      catchError(this.handleError<Certification>(`getCertification id=${id}`))
    );
  }

  /* GET Certifications whose name contains search term 
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
*/
  //////// Save methods //////////

  /** POST: add a new Certification to the server */
  addCertification(certification: Certification): Observable<Certification> {
    return this.http.post<Certification>(this.certURL, certification, this.httpOptions).pipe(
      tap((newCertification: Certification) => this.log(`added certification w/ id=${newCertification.id}`)),
      catchError(this.handleError<Certification>('addCertification'))
    );
  }

  /** DELETE: delete the Certification from the server */
  deleteCertification(id: number): Observable<Certification> {
    const url = `${this.certURL}/${id}`;

    return this.http.delete<Certification>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Certification id=${id}`)),
      catchError(this.handleError<Certification>('deleteCertification'))
    );
  }

  /** PUT: update the Certification on the server */
  updateCertification(certification: Certification): Observable<any> {
    return this.http.put(this.certURL, certification, this.httpOptions).pipe(
      tap(_ => this.log(`updated certification id=${certification.id}`)),
      catchError(this.handleError<any>('updateCertification'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CertificationService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CertificationService: ${message}`);
  }

}