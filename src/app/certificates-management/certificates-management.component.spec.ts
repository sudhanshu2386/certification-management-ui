import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesManagementComponent } from './certificates-management.component';

describe('CertificatesManagementComponent', () => {
  let component: CertificatesManagementComponent;
  let fixture: ComponentFixture<CertificatesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatesManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
