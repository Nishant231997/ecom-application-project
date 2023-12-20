import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatNavbarAddComponent } from './mat-navbar-add.component';

describe('MatNavbarAddComponent', () => {
  let component: MatNavbarAddComponent;
  let fixture: ComponentFixture<MatNavbarAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatNavbarAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatNavbarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
