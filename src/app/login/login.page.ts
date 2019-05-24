import { Voluntario, EstadoVoluntarioEnum } from './../model/voluntario.model';
import { UtilProvider } from './../services/util';
import { Aluno } from './../model/Aluno';
import { AlunoService } from './../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { SemestreService } from '../services/semestre.service';
import { VoluntarioService } from '../services/voluntario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  erroLogin = false;
  erroAutenticacao = false;
  voluntario =  new Voluntario();

  constructor(
    private voluntarioService: VoluntarioService,
    private semestreService: SemestreService,
    public loadingController: LoadingController,
    public util: UtilProvider,
    public router: Router,
    private authGuard: AuthGuardService

  ) { }

  ngOnInit() { 
 

    const voluntario = localStorage.getItem('voluntario');
    if (voluntario) {
      this.router.navigate(['home']);
      return false;
    }
  }

  login() {

    this.erroAutenticacao = false;
    this.erroLogin = false;

    const retorno = this.util.loading('Autenticando...', 2000);

    this.voluntarioService.login(this.voluntario).subscribe(
      (res) => {                    
        setTimeout(() => {
          if (res.body) {
            this.voluntario = res.body;
            localStorage.setItem('voluntario', JSON.stringify(this.voluntario));
            console.log(this.voluntario);                            
            this.authGuard.authEmitter.emit(true);
          } else {
            this.erroAutenticacao = true;
          }
        }, 1000);             
      },
      (error: HttpErrorResponse) => {     
        retorno.then(() =>{
          console.log(error);
          this.erroLogin = true;
        });        
      }
    );
  }

   
}
