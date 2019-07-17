import { Component, OnInit, ViewChild, ViewContainerRef, Input, ViewEncapsulation, Injector } from '@angular/core';

import { FieldFactory } from './field.factory';

import { FormConfig } from '../../../model/form/form.model';
import { FormField } from '../../../model/form/field/field.model';
import { ValidatorType } from '../../../validator/enum/validator-type.enum';

@Component({
	selector: 'corn-field',
	templateUrl: './field.component.html',
	styleUrls: ['./field.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FieldComponent implements OnInit {
	private factory: FieldFactory;
	private injector: Injector;

	@Input()
	public field: FormField;

	@Input()
	public formConfig: FormConfig;

	@Input()
	public model: any;

	@ViewChild('container', { read: ViewContainerRef, static: true })
	public container: ViewContainerRef;

	constructor(factory: FieldFactory, injector: Injector) {
		this.factory = factory;
		this.injector = injector;
	}

	ngOnInit() {
		this.container.clear();

		const validators = [];

		if (this.field.validators) {
			this.field.validators.forEach((type: ValidatorType) => {
				validators.push(this.factory.getValidatorFunction(type));
			});
		}

		const factory = this.factory.createFactoryInstance(this.field.type);
		const ref = this.container.createComponent(factory);
		const data = {
			field: this.field,
			model: this.model,
			formConfig: this.formConfig,
			injector: this.injector,
			validators: validators
		};

		Object.assign(ref.instance, data);
	}
}