import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {MatMenu, MatMenuModule} from "@angular/material/menu";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatChipTrailingIcon} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatDrawer, MatSidenavModule} from "@angular/material/sidenav";
import {MatList, MatListModule} from "@angular/material/list";
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
import { StudentsComponent } from './students/students.component';
import { PaymentsComponent } from './payments/payments.component';
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "./guards/auth.guard";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort, MatSortModule} from "@angular/material/sort";

@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    LoadStudentsComponent,
    DashboardComponent,
    LoadPaymentsComponent,
    StudentsComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatDrawer, MatListModule,
    MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  providers: [
    provideAnimationsAsync(),
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
