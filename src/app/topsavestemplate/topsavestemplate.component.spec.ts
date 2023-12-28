import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsavestemplateComponent } from './topsavestemplate.component';

describe('TopsavestemplateComponent', () => {
  let component: TopsavestemplateComponent;
  let fixture: ComponentFixture<TopsavestemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopsavestemplateComponent]
    });
    fixture = TestBed.createComponent(TopsavestemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
