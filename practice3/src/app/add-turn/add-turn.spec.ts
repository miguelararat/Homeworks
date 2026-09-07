import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTurn } from './add-turn';

describe('AddTurn', () => {
  let component: AddTurn;
  let fixture: ComponentFixture<AddTurn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTurn],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTurn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
