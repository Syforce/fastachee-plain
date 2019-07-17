import { FieldType } from '../form/enum/field-type.enum';
import { FormField } from '../form/field/field.model';
import { SelectFormField } from '../form/field/select-field.model';

const MAP = {
	[FieldType.TEXT]: FormField,
	[FieldType.PASSWORD]: FormField,
	[FieldType.NUMBER]: FormField,
	[FieldType.SELECT]: SelectFormField
}

export class FieldModelFactory {

	public static createModelInstance(config: FormField): FormField {
		const classType = MAP[config.type];

		return classType ? new classType(config as any) : null;
	}
}