import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPicksComponent } from './current-picks.component';

describe('CurrentPicksComponent', () => {
  let component: CurrentPicksComponent;
  let fixture: ComponentFixture<CurrentPicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
