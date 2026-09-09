import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorRotation } from './doctor-rotation';

describe('DoctorRotation', () => {
  let component: DoctorRotation;
  let fixture: ComponentFixture<DoctorRotation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorRotation],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorRotation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
