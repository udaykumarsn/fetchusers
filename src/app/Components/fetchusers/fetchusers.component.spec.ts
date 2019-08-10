import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchusersComponent } from './fetchusers.component';

describe('FetchusersComponent', () => {
  let component: FetchusersComponent;
  let fixture: ComponentFixture<FetchusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
