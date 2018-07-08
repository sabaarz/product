import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from './country-code-mapping-model'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = '';
  userPwd = '';
  selectedCoutry: Country;
  countryDetails: Country[] = [
    { countryCode: '+91', CountryName : 'India'},
    { countryCode: '+92', CountryName : 'Pakistan'},
    { countryCode: '+1', CountryName : 'USA'}
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProduct() {
    this.router.navigate(['add-product']);
  }

  loginUser(e) {
    if (this.userName == 'admin' && this.userPwd == 'admin')
      this.router.navigate(['dashboard']);
  }
  goToRegistration() {
    this.router.navigate(['registration']);
  }

  doLogin() {
    if (this.userName == 'admin' && this.userPwd == 'admin') {
      window.localStorage.setItem('username', this.userName);
      this.router.navigate(['dashboard']);
    } else {
      alert('Invaild User name/ password');
    }
  }
}


