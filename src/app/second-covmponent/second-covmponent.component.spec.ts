import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCovmponentComponent } from './second-covmponent.component';

describe('SecondCovmponentComponent', () => {
  let component: SecondCovmponentComponent;
  let fixture: ComponentFixture<SecondCovmponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCovmponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCovmponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
