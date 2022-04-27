import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaProdutoComponent } from './consulta-produto/consulta-produto.component';
import { EditaprodutoComponent } from './editaproduto/editaproduto.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroProdutoComponent,
    CarrinhoComponent,
    PagamentoComponent,
    CadastroUsuarioComponent,
    LoginComponent,
    HomeComponent,
    ConsultaProdutoComponent,
    EditaprodutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
