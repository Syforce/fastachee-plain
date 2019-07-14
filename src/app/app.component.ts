import { Component } from '@angular/core';
import { FormConfig } from '@plain';

import { formConfig } from './app.form-config';

@Component({
	selector: 'app-component',
	templateUrl: './app.component.html'
})
export class AppComponent {
	public formConfig = formConfig;
	public formValue = {};

	constructor() {
		console.log(this.formConfig);
	}
}