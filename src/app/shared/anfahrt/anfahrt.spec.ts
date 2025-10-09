import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anfahrt } from './anfahrt';

describe('Anfahrt', () => {
  let component: Anfahrt;
  let fixture: ComponentFixture<Anfahrt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anfahrt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anfahrt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
