import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './signup/signup.component';
import { EmployeeCreationComponent } from './employee-creation/employee-creation.component';
// import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:"path-a",
    component:ComponentAComponent
  },
  {
    path:"path-b",
    component:ComponentBComponent
  },
  {
    redirectTo:'login',path:'',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignUpComponent
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
