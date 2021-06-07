import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificSubregionComponent } from './specific-subregion.component';

describe('SpecificSubregionComponent', () => {
  let component: SpecificSubregionComponent;
  let fixture: ComponentFixture<SpecificSubregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificSubregionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificSubregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
