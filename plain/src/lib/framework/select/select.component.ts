import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { DependencyInjector } from '../../dependency/service/dependency.injector';

import { SelectFormField } from '../../model/form/field/select-field.model';

@Component({
	selector: 'corn-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
	private dependencyInjector: DependencyInjector;
	private getSubscription: Subscription;

	public field: SelectFormField;
	public model: any;
	public data: Array<any> = new Array<any>();
	
	public isVisible: boolean = false;
	public map = {};

	constructor(dependencyInjector: DependencyInjector) {
		this.dependencyInjector = dependencyInjector;
	}

	ngOnInit() {
		if (this.field) {
			if (this.field.provider instanceof Array) {
				this.populateStaticData();
			} else {
				this.populatePromiseData();
			}
		}
	}

	@HostListener('document:click', ['$event'])
	public hideList(event: Event) {
		this.isVisible = false;
	}

	public showList(event: Event) {
		event.stopImmediatePropagation();
		this.isVisible = true;
	}

	public selectItem(item, event: Event) {
		event.stopImmediatePropagation();
		this.model[this.field.key] = item[this.field.providerKey];
		this.isVisible = false;
	}

	private populatePromiseData() {
		const providerName: string = this.field.provider as string;
		const service = this.dependencyInjector.getDependency(providerName);

		this.getSubscription = this.field.providerFunction.call(service).subscribe((data) => {
			this.data = data;
			this.saveDataInternally();
		});
	}

	private populateStaticData() {
		this.data = this.field.provider as Array<any>;
		this.saveDataInternally();
	}

	private saveDataInternally() {
		this.data.forEach((item) => {
			this.map[item[this.field.providerKey]] = item[this.field.providerLabel];
		});
	}

	ngOnDestroy() {
		this.getSubscription && this.getSubscription.unsubscribe();
	}
}