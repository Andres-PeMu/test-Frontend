import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotentDetailComponent } from './cotent-detail.component';

describe('CotentDetailComponent', () => {
  let component: CotentDetailComponent;
  let fixture: ComponentFixture<CotentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
