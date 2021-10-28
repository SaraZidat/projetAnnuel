import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchandThumbnailComponent } from './marchand-thumbnail.component';

describe('MarchandThumbnailComponent', () => {
  let component: MarchandThumbnailComponent;
  let fixture: ComponentFixture<MarchandThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchandThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchandThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
