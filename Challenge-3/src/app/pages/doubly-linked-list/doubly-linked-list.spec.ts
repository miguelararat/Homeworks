import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublyLinkedList } from './doubly-linked-list';

describe('DoublyLinkedList', () => {
  let component: DoublyLinkedList;
  let fixture: ComponentFixture<DoublyLinkedList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoublyLinkedList],
    }).compileComponents();

    fixture = TestBed.createComponent(DoublyLinkedList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
