import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFarmProfileComponent } from './edit-farm-profile.component';

describe('EditFarmProfileComponent', () => {
  let component: EditFarmProfileComponent;
  let fixture: ComponentFixture<EditFarmProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFarmProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFarmProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
