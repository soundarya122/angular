import { Component, OnInit } from '@angular/core';
import {HttpClientService} from './http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  countries: string[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(){
    this.httpClientService.getCountries().subscribe(
      response => this.handleSuccess(response),
    );
  }
  handleSuccess(response){
    console.log(response)
    this.countries = response;
  }

}
