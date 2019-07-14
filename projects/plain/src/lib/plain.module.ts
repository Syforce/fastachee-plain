import { NgModule } from '@angular/core';
import { PlainComponent } from './plain.component';

import { FormComponent } from '@framework/form/form.component';

@NgModule({
	declarations: [
		PlainComponent,
		FormComponent
	],
	imports: [],
	exports: [
		PlainComponent,
		FormComponent
	]
})
export class PlainModule { }
