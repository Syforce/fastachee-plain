import { FieldType } from '../enum/field-type.enum';
import { ValidatorType } from '../../../validator/enum/validator-type.enum';

export class FormField {
	public label: string;
	public type: FieldType;
	public key: string;
	public validators?: Array<ValidatorType>;

	constructor(field?: FormField) {
		if (field) {
			this.label = field.label;
			this.type = field.type;
			this.key = field.key;
			this.validators = field.validators;
		}
	}
}