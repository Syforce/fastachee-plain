import { Component, OnInit } from '@angular/core';

import { FormConfig, FormField, FieldType, SelectFormField, ValidatorType } from '../../../plain/src/public-api';

@Component({
	selector: 'profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	public config: FormConfig;
	public value = {
		firstName: 'Syforce',
		lastName: 'Lightningstorm',
		gender: 'Male'
	};

	ngOnInit() {
		const firstName: FormField = {
			key: 'firstName',
			label: 'First name',
			type: FieldType.TEXT,
			validators: [ValidatorType.REQUIRED]
		};

		const lastName: FormField = {
			key: 'lastName',
			label: "Last name",
			type: FieldType.TEXT
		};

		const gender: SelectFormField = {
			key: 'gender',
			label: 'Gender',
			providerKey: 'value',
			providerLabel: 'value',
			type: FieldType.SELECT,
			provider: [{
				value: 'Male'
			}, {
				value: 'Female'
			}]
		}

		this.config = {
			fields: [],
			rows: [{
				fields: [firstName, lastName, lastName]
			}, {
				fields: [firstName, gender]
			}]
		};
	}
}