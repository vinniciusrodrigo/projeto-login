import { Component} from '@angular/core';
import { logging } from 'protractor';
import { homedir } from 'os';
import { getMaxListeners } from 'cluster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email = 'vinnicius@gmail.com';
  senha = '123456';
  constructor(private router: Router) {}

  login(){
    if (this.email === 'vinniciu@gmail.com' && this.senha === '123456'){
      this.router.navigateByUrl('perfil');
    }
  }
}



