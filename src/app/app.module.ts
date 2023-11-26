import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PreguntaUnoComponent } from './home/pregunta-uno/pregunta-uno.component';
import { PreguntaDosComponent } from './home/pregunta-dos/pregunta-dos.component';
import { PreguntaTresComponent } from './home/pregunta-tres/pregunta-tres.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreguntaUnoComponent,
    PreguntaDosComponent,
    PreguntaTresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'home', component: HomeComponent,
        children: [
          { path: 'preguntauno', component: PreguntaUnoComponent },
          { path: 'preguntados', component: PreguntaDosComponent },
          { path: 'preguntatres', component: PreguntaTresComponent },
        ]
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
