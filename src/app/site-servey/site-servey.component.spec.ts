import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteServeyComponent } from './site-servey.component';

describe('SiteServeyComponent', () => {
  let component: SiteServeyComponent;
  let fixture: ComponentFixture<SiteServeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteServeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteServeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
