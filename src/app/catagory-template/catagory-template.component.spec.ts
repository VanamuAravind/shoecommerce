import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryTemplateComponent } from './catagory-template.component';

describe('CatagoryTemplateComponent', () => {
  let component: CatagoryTemplateComponent;
  let fixture: ComponentFixture<CatagoryTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatagoryTemplateComponent]
    });
    fixture = TestBed.createComponent(CatagoryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
