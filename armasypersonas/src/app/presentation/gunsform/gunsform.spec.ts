import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gunsform } from './gunsform';

describe('Gunsform', () => {
  let component: Gunsform;
  let fixture: ComponentFixture<Gunsform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gunsform],
    }).compileComponents();

    fixture = TestBed.createComponent(Gunsform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
