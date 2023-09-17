import { NgModule, enableProdMode, isDevMode } from '@angular/core';
import { BrowserModule, bootstrapApplication  } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { TutorialRoutingModule } from './tutorial-m/tutorial-routing.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { TutorialMModule } from './tutorial-m/tutorial-m.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    TutorialRoutingModule,
    AppRoutingModule,
    
    TutorialMModule,

    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
