import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Constants } from '../../environments/constants.service'
import { Offer, Subscription, Usage } from '../models/model'

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
      map((data: any) => data.offers.map((item: any) => new Offer(
        item.id,
        item.name,
        item.contractStartDate,
        item.contractEndDate
      ))));
  }

  getSubscriptions(offerId: number): Observable<any> {
      return this.http.get(environment.API_ENDPOINT + Constants.URL_API_OFFERS + "/" + offerId + Constants.URL_API_SUBSCRIPTION).pipe(
      map((data: any) => data.subscriptions.map((item: any) => new Subscription(
        item.id,
        item.name,
        item.type,        
        item.usage == undefined ? [] : item.usage.map( usageItem => new Usage(usageItem.type, usageItem.used, usageItem.limit))
      ))));
  }

}
