import { FormField } from './field.model';
import { FieldType } from '../enum/field-type.enum';

export class SelectFormField extends FormField {
	public provider: string | Array<any>;
	public providerFunction?: Function;
	public presetValue?: any;
	public providerKey: string;
	public providerLabel: string;

	constructor(field?: SelectFormField) {
		super(field);

		if (field) {
			this.provider = field.provider;
			this.providerFunction = field.providerFunction;
			this.providerKey = field.providerKey;
			this.providerLabel = field.providerLabel;
			this.presetValue = field.presetValue;
		}
	}
}