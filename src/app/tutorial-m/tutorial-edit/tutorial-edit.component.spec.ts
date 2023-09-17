import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialEditComponent } from './tutorial-edit.component';

describe('TutorialEditComponent', () => {
  let component: TutorialEditComponent;
  let fixture: ComponentFixture<TutorialEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialEditComponent]
    });
    fixture = TestBed.createComponent(TutorialEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
