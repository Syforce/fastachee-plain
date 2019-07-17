import { FormField } from './field/field.model';
import { FormRow } from './row/row.model';

export class FormConfig {
	public fields: Array<FormField> = new Array<FormField>();
	public rows: Array<FormRow> = new Array<FormRow>();
	public floatControl?: boolean = false;

	constructor(config?: FormConfig) {
		if (config) {
			if (config.rows) {
				config.rows.forEach((row: FormRow) => {
					this.rows.push(new FormRow(row));
				});
			}

			// if (config.fields) {
			// 	config.fields.forEach((item) => {
			// 		this.fields.push(Object.assign({}, item));
			// 	});
			// }

			this.floatControl = config.floatControl;
		}
	}
}