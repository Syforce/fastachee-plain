export class RequiredValidator {
	public static validate(value: string): boolean {
		console.log(value, '--', value.length > 0, '--', value && value.length > 0);
		return value && value.length > 0;
	}
}