import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchandAddComponent } from './marchand-add.component';

describe('MarchandAddComponent', () => {
  let component: MarchandAddComponent;
  let fixture: ComponentFixture<MarchandAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchandAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchandAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
