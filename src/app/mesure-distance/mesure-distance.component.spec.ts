import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesureDistanceComponent } from './mesure-distance.component';

describe('MesureDistanceComponent', () => {
  let component: MesureDistanceComponent;
  let fixture: ComponentFixture<MesureDistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesureDistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesureDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
