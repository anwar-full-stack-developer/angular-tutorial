import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TutorialsListComponent } from '../tutorial-m/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from '../tutorial-m/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from '../tutorial-m/add-tutorial/add-tutorial.component';
import { TutorialEditComponent } from './tutorial-edit/tutorial-edit.component';


const routes: Routes = [
  // {path: "", component: HomeComponent},
  // { path: 'books', component: BooksComponent },
  // { path: 'customers', component: CustomerIndexComponent },
  // { path: 'tasks', component: TasksComponent },
  
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials-edit/:id', component: TutorialEditComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'tutorials-add', component: AddTutorialComponent },

  // { path: 'books-list', component: BooksListComponent },
  // { path: 'add-book', component: AddBookComponent },
  // { path: 'edit-book/:id', component: BookDetailComponent },
  
  // {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
