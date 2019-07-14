import { FieldType } from '@model/form/enum/field-type.enum';

export class FormField {
	public label: string;
	public type: FieldType;
	public key: string;

	constructor(field?: FormField) {
		if (field) {
			this.label = field.label;
			this.type = field.type;
			this.key = field.key;
		}
	}
}