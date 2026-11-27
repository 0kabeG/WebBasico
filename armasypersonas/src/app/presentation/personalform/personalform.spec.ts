import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Personalform } from './personalform';

describe('Personalform', () => {
  let component: Personalform;
  let fixture: ComponentFixture<Personalform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personalform],
    }).compileComponents();

    fixture = TestBed.createComponent(Personalform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
