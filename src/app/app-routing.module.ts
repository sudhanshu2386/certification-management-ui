import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CertManageComponent } from './cert-manage/cert-manage.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillComponent } from './skill/skill.component';


const routes: Routes = [
		{ path: '', redirectTo: '/certifications', pathMatch: 'full' },
		{ path: 'test', component: CertManageComponent },
		{path: 'profile', component: ProfileComponent },
		{path: 'skill', component: SkillComponent },
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
