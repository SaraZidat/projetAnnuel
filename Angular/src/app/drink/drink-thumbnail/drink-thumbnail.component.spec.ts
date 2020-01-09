import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkThumbnailComponent } from './drink-thumbnail.component';

describe('DrinkThumbnailComponent', () => {
  let component: DrinkThumbnailComponent;
  let fixture: ComponentFixture<DrinkThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
