import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomSortComponent } from './random-sort.component';

describe('RandomSortComponent', () => {
  let component: RandomSortComponent;
  let fixture: ComponentFixture<RandomSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomSortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
