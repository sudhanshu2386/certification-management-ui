import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertManageComponent } from './cert-manage/cert-manage.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillComponent } from './skill/skill.component';

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
    CertManageComponent, ProfileComponent, SkillComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
