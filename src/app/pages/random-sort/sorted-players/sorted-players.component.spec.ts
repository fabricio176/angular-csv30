import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedPlayersComponent } from './sorted-players.component';

describe('SortedPlayersComponent', () => {
  let component: SortedPlayersComponent;
  let fixture: ComponentFixture<SortedPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortedPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortedPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
