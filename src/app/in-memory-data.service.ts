import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Certification } from './certification';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const certifications = [
      { id: 11, name: 'Angular', age:'2' },
      { id: 12, name: 'Kafka', age:'1' },
      { id: 13, name: 'Mongo-db', age:'3' },
      { id: 14, name: 'Apache Tomcat', age:'2.5' },
      { id: 15, name: 'Nifi', age:'1.2' },
      { id: 16, name: 'AWS', age:'2' },
      { id: 17, name: 'IBM Cloud', age:'2' },
      { id: 18, name: 'Blockchain', age:'2' },
      { id: 19, name: 'Magento', age:'2' },
      { id: 20, name: 'Java', age:'2' }
    ];
    return {certifications};
  }

  // Overrides the genId method to ensure that a certification always has an id.
  // If the certifications array is empty,
  // the method below returns the initial number (11).
  // if the certifications array is not empty, the method below returns the highest
  // certification id + 1.
  genId(certification: Certification[]): number {
    return certification.length > 0 ? Math.max(...certification.map(certification => certification.id)) + 1 : 11;
  }
}
