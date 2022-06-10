import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ConhecimentoComponent } from './pages/conhecimento/conhecimento.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ConhecimentoComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
