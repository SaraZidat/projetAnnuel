import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarThumbnailComponent } from './bar-thumbnail.component';

describe('BarThumbnailComponent', () => {
  let component: BarThumbnailComponent;
  let fixture: ComponentFixture<BarThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
