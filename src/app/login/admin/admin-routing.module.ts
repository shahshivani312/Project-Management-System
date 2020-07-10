import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { OnboardComponent } from 'src/app/onboard/onboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    { path:'admin' , component: AdminComponent,children:[
      {path:'dashboard', component:DashboardComponent},
      { path:'onboard' , component: OnboardComponent },
    ] 
  },
    


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
