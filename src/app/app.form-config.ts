import { FormConfig, FormField, SelectFormField, FieldType } from 'plain';

const nameField: FormField = {
	key: 'name',
	label: 'Name',
	type: FieldType.TEXT
};

const passwordField: FormField = {
	key: 'password',
	label: 'Password',
	type: FieldType.PASSWORD
};

export const formConfig: FormConfig = {
	fields: [nameField, passwordField]
};