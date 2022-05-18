import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificatesManagementComponent } from './certificates-management/certificates-management.component';
import { ProfilesManagementComponent } from './profiles-management/profiles-management.component';
import { SkillsManagementComponent } from './skills-management/skills-management.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent, 
    CertificatesManagementComponent, ProfilesManagementComponent, SkillsManagementComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
