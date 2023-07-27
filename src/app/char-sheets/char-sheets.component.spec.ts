import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharSheetsComponent } from './char-sheets.component';

describe('CharSheetsComponent', () => {
  let component: CharSheetsComponent;
  let fixture: ComponentFixture<CharSheetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharSheetsComponent]
    });
    fixture = TestBed.createComponent(CharSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
