import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingsComponent } from './lendings.component';

describe('LendingsComponent', () => {
  let component: LendingsComponent;
  let fixture: ComponentFixture<LendingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
