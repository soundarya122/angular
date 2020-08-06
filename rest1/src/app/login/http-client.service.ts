import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
export class Country{
  constructor(
    id: string,
    countryName: string,
    population: string
  ) {
  }

}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService{

  constructor(
    private httpClient: HttpClient
  ) { }

  getCountries(): Observable<Country[]>{
    console.log('get countries');
    return this.httpClient.get<Country[]>('http://localhost:8082/spring-rest/getAllCountries');
  }

}
