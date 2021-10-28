import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchandDetailsComponent } from './marchand-details.component';

describe('MarchandDetailsComponent', () => {
  let component: MarchandDetailsComponent;
  let fixture: ComponentFixture<MarchandDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchandDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
