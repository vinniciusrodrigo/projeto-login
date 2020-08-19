import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  email = 'vinnicius@rodrigo.com';
  senha = '123456';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    if (this.email === 'vinnicius@rodrigo.com' && this.senha === '123456'){
      this.router.navigateByUrl('home');
    }
  }
}
