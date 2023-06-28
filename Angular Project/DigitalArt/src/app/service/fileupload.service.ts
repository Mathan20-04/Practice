import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  private _urlUpload = "http://etherart-api.itfyme.com/api/main/image/add" ;
  private _urlGet = "http://etherart-api.itfyme.com/api/main/image/get";
  private _urlGetList = "http://etherart-api.itfyme.com/api/main/image/get-list" ;

  private httpHeaders;
  private httpClient;

  constructor(http: HttpClient) {
    this.httpClient = http;
    // this.buildHeaders();
  }
  //
  // isCacheable(): boolean {
  //   return false;
  // }
  //
  // objectKey(): string {
  //   return 'IMAGE';
  // }
  //
  // objectParentKey(): string {
  //   return '';
  // }
  //
  // objectPrimaryKey(): string {
  //   return '';
  // }
  //
  // preAdd() {
  //   this.url = this._urlExAdd;
  //   this.enableCredentials = true;
  // }
  //
  // protected postAdd(responseJson): any {
  //   return responseJson;
  // }

  upload(file: File, paramsObject: any): any{
    try {
      const formData = new FormData() ;

      let data: object = {};
      data['title'] = paramsObject.title ;
      data['description'] = paramsObject.description ;
      data['length'] = paramsObject.length ;
      data['width'] = paramsObject.width ;
      data['price'] = paramsObject.price ;
      data['metadata'] = paramsObject.metadata ;

      formData.append("file", file, file.name);
      formData.append("image_json", JSON.stringify(data));

      const wsURL = this._urlUpload ;

      return this.httpClient.post(
        wsURL,
        formData,
        {
          headers: this.httpHeaders,
          withCredentials: true,
          responseType: 'json'
        }
      )
        .pipe(
          map((response: Response)  => {
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
