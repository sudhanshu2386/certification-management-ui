import { Component, OnInit } from '@angular/core';

import { Certification } from '../certification';
import { CertificationService } from '../certification.service';

@Component({
  selector: 'app-cert-manage',
  templateUrl: './cert-manage.component.html',
  styleUrls: ['./cert-manage.component.css']
})
export class CertManageComponent implements OnInit {
  title = 'certification-management';
  
  certifications: Certification[] = [];
  
  constructor(private certificationService: CertificationService) { }
  
  ngOnInit(): void {
    this.getCertifications();
  }

  getCertifications(): void {
    this.certificationService.getCertifications()
    .subscribe(certifications => this.certifications = certifications);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.certificationService.addCertification({ name } as Certification).subscribe(certification => {
        this.certifications.push(certification);
      });
  }

  delete(certification: Certification): void {
    this.certifications = this.certifications.filter(h => h !== certification);
    this.certificationService.deleteCertification(certification.id).subscribe();
  }
  
}
