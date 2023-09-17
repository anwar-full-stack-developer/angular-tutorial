import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';
import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialEditComponent } from './tutorial-edit/tutorial-edit.component';


@NgModule({
  declarations: [
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    TutorialEditComponent
  ],
  imports: [
    // RouterModule,
    TutorialRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ]
})
export class TutorialMModule { }
