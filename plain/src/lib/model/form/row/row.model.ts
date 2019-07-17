import { FormField } from '../field/field.model';

import { FieldModelFactory } from '../../service/field-model.factory';

export class FormRow {
	public fields: Array<FormField> = new Array<FormField>();

	constructor(config?: FormRow) {
		if (config) {
			if (config.fields) {
				config.fields.forEach((field: FormField) => {
					this.fields.push(FieldModelFactory.createModelInstance(field));
				});
			}
		}
	}
}