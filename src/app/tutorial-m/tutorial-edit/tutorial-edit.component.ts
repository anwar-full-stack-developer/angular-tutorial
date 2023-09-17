import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { TutorialService } from '../tutorial.service';
import { Tutorial } from '../tutorial.model';


@Component({
  selector: 'app-tutorial-edit',
  templateUrl: './tutorial-edit.component.html',
  styleUrls: ['./tutorial-edit.component.css']
})
export class TutorialEditComponent implements OnInit {
 @Input() viewMode = false;

  loading = false;
  submitted = false;
 
  currentTutorial: Tutorial = {
    id: '',
    _id: '',
    title: '',
    description: '',
    published: false
  };
  
  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
    ) {

    }
    
  ngOnInit(): void {
      this.getTutorial(this.route.snapshot.params["id"]);
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTutorial = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  
  updatePublished(status: boolean): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };

    this.message = '';

    this.tutorialService.update(this.currentTutorial._id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTutorial.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateTutorial(): void {
    this.message = '';

    this.tutorialService.update(this.currentTutorial._id, this.currentTutorial)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }


  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial._id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
        },
        error: (e) => console.error(e)
      });
  }

}