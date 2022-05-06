import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './authguard.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent,
    canActivate: [AuthguardService]
  },
  {
    path: 'consulta',
    component: ConsultaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
