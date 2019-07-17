import { Injectable, ComponentFactoryResolver } from '@angular/core';

// Component
import { InputComponent } from '../../input/input.component';
import { SelectComponent } from '../../select/select.component';

// Validators
import { RequiredValidator } from '../../../validator/required.validator';

// Enum
import { FieldType } from '../../../model/form/enum/field-type.enum';
import { ValidatorType } from '../../../validator/enum/validator-type.enum';

const MAP = {
	[FieldType.TEXT]: InputComponent,
	[FieldType.NUMBER]: InputComponent,
	[FieldType.PASSWORD]: InputComponent,
	[FieldType.SELECT]: SelectComponent
}

const VALIDATOR_MAP = {
	[ValidatorType.REQUIRED]: RequiredValidator.validate
}

@Injectable()
export class FieldFactory {
	private factory: ComponentFactoryResolver;

	constructor(factory: ComponentFactoryResolver) {
		this.factory = factory;
	}

	public createFactoryInstance(type: FieldType) {
		const component: any = MAP[type];
		return this.factory.resolveComponentFactory(component);
	}

	public getValidatorFunction(type: ValidatorType) {
		return VALIDATOR_MAP[type];
	}
}