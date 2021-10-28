import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchandListComponent } from './marchand-list.component';

describe('MarchandListComponent', () => {
  let component: MarchandListComponent;
  let fixture: ComponentFixture<MarchandListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchandListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
