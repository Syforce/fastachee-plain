import { FormField } from './field.model';

export class SelectFormField extends FormField {
	public provider: string;
	public providerFunction: Function;
	public providerKey: string;
	public providerLabel: string;
	public presetValue?: any;

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