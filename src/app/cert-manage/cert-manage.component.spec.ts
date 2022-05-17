import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertManageComponent } from './cert-manage.component';

describe('CertManageComponent', () => {
  let component: CertManageComponent;
  let fixture: ComponentFixture<CertManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
