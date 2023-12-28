import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowproductofferComponent } from './showproductoffer.component';

describe('ShowproductofferComponent', () => {
  let component: ShowproductofferComponent;
  let fixture: ComponentFixture<ShowproductofferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowproductofferComponent]
    });
    fixture = TestBed.createComponent(ShowproductofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
