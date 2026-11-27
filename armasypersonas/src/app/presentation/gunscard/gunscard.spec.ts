import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gunscard } from './gunscard';

describe('Gunscard', () => {
  let component: Gunscard;
  let fixture: ComponentFixture<Gunscard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gunscard],
    }).compileComponents();

    fixture = TestBed.createComponent(Gunscard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
