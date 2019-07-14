import { Component, Input } from '@angular/core';

import { FormConfig } from '@model/form/form.model';

@Component({
	selector: 'corn-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent {
	@Input()
	public set config(data: FormConfig) {
		this.storedConfig = data;
		this.checkData();
	}

	@Input()
	public set value(data: any) {
		this.storedValue = data;
		this.checkData();
	}

	public formConfig: FormConfig;
	public formValue: any;

	private storedConfig: FormConfig;
	private storedValue: any;

	private checkData() {
		if (this.storedConfig && this.storedValue) {
			this.formConfig = new FormConfig(this.storedConfig);
			this.formValue = JSON.parse(JSON.stringify(this.storedValue));
			// this.controlBarConfig = controlBarConfig;
			// this.controlBarConfig.floatControl = this.formConfig.floatControl;
		}
	}
}