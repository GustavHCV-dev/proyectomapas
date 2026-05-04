import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emblemas } from './emblemas';

describe('Emblemas', () => {
  let component: Emblemas;
  let fixture: ComponentFixture<Emblemas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emblemas],
    }).compileComponents();

    fixture = TestBed.createComponent(Emblemas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
