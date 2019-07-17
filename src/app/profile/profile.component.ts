import { Component, OnInit } from '@angular/core';

import { FormConfig, FormField, FieldType } from '../../../plain/src/public-api';

@Component({
	selector: 'profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	public config: FormConfig;
	public value = {
		firstName: 'Syforce',
		lastName: 'Lightningstorm'
	};

	ngOnInit() {
		const firstName: FormField = {
			key: 'firstName',
			label: 'First name',
			type: FieldType.TEXT
		};

		const lastName: FormField = {
			key: 'lastName',
			label: "Last name",
			type: FieldType.TEXT
		};

		this.config = {
			fields: [],
			rows: [{
				fields: [firstName, lastName, lastName]
			}, {
				fields: [firstName, lastName]
			}]
		};
	}
}