import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesSecComponent } from './advantages-sec.component';

describe('AdvantagesSecComponent', () => {
  let component: AdvantagesSecComponent;
  let fixture: ComponentFixture<AdvantagesSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvantagesSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantagesSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
