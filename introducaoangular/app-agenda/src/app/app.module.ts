import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { ConsultaContatoComponent } from './consulta-contato/consulta-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroContatoComponent,
    ConsultaContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
