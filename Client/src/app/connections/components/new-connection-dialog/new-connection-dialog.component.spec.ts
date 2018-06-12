import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConnectionDialogComponent } from './new-connection-dialog.component';

describe('NewConnectionDialogComponent', () => {
  let component: NewConnectionDialogComponent;
  let fixture: ComponentFixture<NewConnectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConnectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConnectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
