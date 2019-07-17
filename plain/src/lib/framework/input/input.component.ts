import { Component } from '@angular/core';

import { FormConfig } from '../../model/form/form.model';
import { FormField } from '../../model/form/field/field.model';

@Component({
	selector: 'corn-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent {
	public field: FormField;
	public model: any;
	public formConfig: FormConfig;

	private validators: Array<(value) => boolean>;

	public onBlur() {
		this.validate();
	}

	private validate() {
		console.log('...', this.validators.length);
		for (let i = 0; i < this.validators.length; i++) {
			const value = this.validators[i](this.model[this.field.key]);

			console.log(value);
		}
	}
}