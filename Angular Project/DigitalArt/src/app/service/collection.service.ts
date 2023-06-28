import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private _urlCollection = "http://etherart-api.itfyme.com/api/main/collection/get";

  private httpHeaders;
  private httpClient;
  constructor(http:HttpClient) {
    this.httpClient = http;
  }
  getCollection( imageId: string): any {
    try {
      const formData = new FormData();

      const wsURL = this._urlCollection+"?id="+imageId;

      return this.httpClient.get(
        wsURL
      )
        .pipe(
          map((response: Response) => {
            if (response['response_object'] === undefined) {
              return response;
            } else {
              return response['response_object'];
            }
          })
        );
    } catch (e) {
      console.log("Error");
    }
  }
}
