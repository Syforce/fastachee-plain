import { FormField } from '../field/field.model';

export class FormRow {
	public fields: Array<FormField> = new Array<FormField>();

	constructor(config?: FormRow) {
		if (config) {
			if (config.fields) {
				config.fields.forEach((field: FormField) => {
					this.fields.push(new FormField(field));
				});
			}
		}
	}
}