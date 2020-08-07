import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringRestComponent } from './spring-rest.component';

describe('SpringRestComponent', () => {
  let component: SpringRestComponent;
  let fixture: ComponentFixture<SpringRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
