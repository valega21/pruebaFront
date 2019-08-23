import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { CanalesComponent } from './components/canales/canales.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { AplicacionComponent } from './components/aplicacion/aplicacion.component';

//Rutas
import { APP_ROUTING } from './app.routes';
import { ListasService } from './services/listas.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    CanalesComponent,
    TiendaComponent,
    AplicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [ ListasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
