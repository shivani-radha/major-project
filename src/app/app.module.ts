import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ToastrModule } from 'ngx-toastr';
import { EmployeeCreationComponent } from './employee-creation/employee-creation.component';
import { EmployeeService } from './employee.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeCreationComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [
              EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
