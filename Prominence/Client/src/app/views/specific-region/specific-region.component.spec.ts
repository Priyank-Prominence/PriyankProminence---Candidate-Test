import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificRegionComponent } from './specific-region.component';

describe('SpecificRegionComponent', () => {
  let component: SpecificRegionComponent;
  let fixture: ComponentFixture<SpecificRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
