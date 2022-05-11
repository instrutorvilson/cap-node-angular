import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdm } from './authAdm.service';
import { AuthLogin } from './authLogin.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ErrosComponent } from './erros/erros.component';
import { LoginComponent } from './login/login.component';
import { RelatorioVendasComponent } from './relatorio-vendas/relatorio-vendas.component';

const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent,
    canActivate: [AuthLogin]
  },
  {
    path: 'consulta',
    component: ConsultaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'relatorio',
    component: RelatorioVendasComponent,
    canActivate: [AuthAdm]
  },
  {
    path: 'erro',
    component: ErrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
