import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersAddedComponent } from './players-added.component';

describe('PlayersAddedComponent', () => {
  let component: PlayersAddedComponent;
  let fixture: ComponentFixture<PlayersAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersAddedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
