import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientHistorial } from './patient-historial';

describe('PatientHistorial', () => {
  let component: PatientHistorial;
  let fixture: ComponentFixture<PatientHistorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientHistorial],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientHistorial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
