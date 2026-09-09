import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministrativeCommitee } from './administrative-commitee';

describe('AdministrativeCommitee', () => {
  let component: AdministrativeCommitee;
  let fixture: ComponentFixture<AdministrativeCommitee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrativeCommitee],
    }).compileComponents();

    fixture = TestBed.createComponent(AdministrativeCommitee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
