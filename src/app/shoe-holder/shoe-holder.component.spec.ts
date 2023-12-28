import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeHolderComponent } from './shoe-holder.component';

describe('ShoeHolderComponent', () => {
  let component: ShoeHolderComponent;
  let fixture: ComponentFixture<ShoeHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoeHolderComponent]
    });
    fixture = TestBed.createComponent(ShoeHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
