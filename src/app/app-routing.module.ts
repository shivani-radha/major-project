import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EmployeeCreationComponent } from './employee-creation/employee-creation.component';
// import { AuthGuard } from './auth.guard';

const routes: Routes = [
 
  {
    redirectTo:'login',path:'',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  
{
  path:'dashboard',component:DashboardComponent
},
{
   path: 'employee-creation', component: EmployeeCreationComponent 
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
