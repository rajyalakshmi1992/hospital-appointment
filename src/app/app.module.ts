import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAppointmentComponent } from './pages/new-appointment/new-appointment.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewAppointmentComponent,
    AppointmentListComponent,
    DasboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
