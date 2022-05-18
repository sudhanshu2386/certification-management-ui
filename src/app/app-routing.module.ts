import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CertificatesManagementComponent } from './certificates-management/certificates-management.component';
import { ProfilesManagementComponent } from './profiles-management/profiles-management.component';
import { SkillsManagementComponent } from './skills-management/skills-management.component';


const routes: Routes = [
		{ path: '', redirectTo: '/certifications', pathMatch: 'full' },
		{ path: 'certificates', component: CertificatesManagementComponent },
		{ path: 'profiles', component: ProfilesManagementComponent },
		{ path: 'skills', component: SkillsManagementComponent },
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
