import { Injectable, ComponentFactoryResolver } from '@angular/core';

// Component
import { InputComponent } from '../../input/input.component';
// import { DynamicSelectComponent } from '@shared/framework/dynamic-select/dynamic-select.component';

// Enum
import { FieldType } from '../../../model/form/enum/field-type.enum';

const MAP = {
	[FieldType.TEXT]: InputComponent,
	[FieldType.NUMBER]: InputComponent,
	[FieldType.PASSWORD]: InputComponent
	// [FieldType.SELECT]: DynamicSelectComponent
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
}