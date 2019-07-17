import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlainModule } from '../../plain/src/public-api';

import { ProfileComponent } from './profile/profile.component';

export const ROUTES: Routes = [{
	path: 'profile',
	component: ProfileComponent
}];

@NgModule({
	imports: [
		PlainModule,
		RouterModule.forRoot(ROUTES)
	],
	declarations: [
		ProfileComponent
	],
	exports: [RouterModule]
})
export class AppRouterModule {}