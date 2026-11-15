import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifSearch } from './gif-search';

describe('GifSearch', () => {
  let component: GifSearch;
  let fixture: ComponentFixture<GifSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(GifSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
