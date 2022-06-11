import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConhecimentoComponent } from './conhecimento/conhecimento.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ConhecimentoComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],


})

export class PagesModule { }
