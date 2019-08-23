import { RouterModule, Routes} from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CanalesComponent } from './components/canales/canales.component';
import { AplicacionComponent } from './components/aplicacion/aplicacion.component';


const APP_ROUTES: Routes =[
    { path: 'home', component: HomeComponent },
    { path: 'canales', component: CanalesComponent },
    { path: 'aplicacion', component: AplicacionComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});