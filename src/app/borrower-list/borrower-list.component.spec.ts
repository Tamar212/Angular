import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerLIstComponent } from './borrower-list.component';

describe('BorrowerLIstComponent', () => {
  let component: BorrowerLIstComponent;
  let fixture: ComponentFixture<BorrowerLIstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowerLIstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerLIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
