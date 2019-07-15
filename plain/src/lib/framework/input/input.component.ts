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
}