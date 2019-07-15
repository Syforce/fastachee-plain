import { FormField } from './field/field.model';

export class FormConfig {
	public fields: Array<FormField> = new Array<FormField>();
	public floatControl?: boolean = false;

	constructor(config?: FormConfig) {
		if (config) {
			if (config.fields) {
				config.fields.forEach((item) => {
					this.fields.push(Object.assign({}, item));
				});
			}

			this.floatControl = config.floatControl;
		}
	}
}