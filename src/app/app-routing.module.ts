import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimulationComponent } from './simulation/simulation.component';
import { DesignComponent } from './design/design.component';
import { SiteServeyComponent } from './site-servey/site-servey.component';
import { RapportsComponent } from './rapports/rapports.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import{ LandingComponent } from './landing/landing.component';

import {EquipementsComponent} from './equipements/equipements.component'

const routes: Routes = [

  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'home', component: MainNavComponent , canActivate: [AuthGuard] },
  { path: 'siteservey', component: SiteServeyComponent, canActivate: [AuthGuard] },
  { path: 'simulation' , component : SimulationComponent, canActivate: [AuthGuard]},
  { path: 'design' ,  component: DesignComponent, canActivate: [AuthGuard] },
  { path: 'rapports' , component: RapportsComponent , canActivate: [AuthGuard]},
  { path: 'menu' , component: LandingComponent },


  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

 
];

export const appRoutingModule = RouterModule.forRoot(routes);



