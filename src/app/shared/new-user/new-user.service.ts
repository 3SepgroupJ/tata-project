import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {
  patchValue(data: any) {
    throw new Error('Method not implemented.');
  }
  baseUrl:string="http://localhost:3000/";

  httpHeaders:HttpHeaders = new HttpHeaders()
                            .set('content-type','application/json');

  constructor(private http:HttpClient) { }


  postDetailsToServer(endPoint: string, requestbody:any) {
    let url = this.baseUrl + endPoint;
    return this.http.post(url,requestbody, { 'headers': this.httpHeaders});
  }

  getDetailsFromServer(endPoint: string) {
    let url = this.baseUrl + endPoint;
    return this.http.get(url, { 'headers': this.httpHeaders});
  }

}
