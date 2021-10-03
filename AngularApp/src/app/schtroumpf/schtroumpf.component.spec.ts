import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchtroumpfComponent } from './schtroumpf.component';

describe('SchtroumpfComponent', () => {
  let component: SchtroumpfComponent;
  let fixture: ComponentFixture<SchtroumpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchtroumpfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchtroumpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
