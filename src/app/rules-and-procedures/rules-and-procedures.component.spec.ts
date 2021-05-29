import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesAndProceduresComponent } from './rules-and-procedures.component';

describe('RulesAndProceduresComponent', () => {
  let component: RulesAndProceduresComponent;
  let fixture: ComponentFixture<RulesAndProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesAndProceduresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesAndProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
