import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Constants } from '../../environments/constants.service'


@Injectable({
  providedIn: 'root'
})

export class RestService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getOffers(): Observable<any> {
      return this.http.get(environment.API_ENDPOINT + Constants.URL_API_OFFERS).pipe(
      map(this.extractData));
  }

  getSubscriptions(offerId: number): Observable<any> {
      return this.http.get(environment.API_ENDPOINT + Constants.URL_API_OFFERS + "/" + offerId + Constants.URL_API_SUBSCRIPTION).pipe(
      map(this.extractData));
  }

}
