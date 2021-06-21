import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusablebuttonComponent } from './reusablebutton.component';

describe('ReusablebuttonComponent', () => {
  let component: ReusablebuttonComponent;
  let fixture: ComponentFixture<ReusablebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusablebuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusablebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
