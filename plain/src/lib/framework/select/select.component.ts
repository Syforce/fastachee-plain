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
		const service = this.dependencyInjector.getDependency(this.field.provider);
		this.getSubscription = this.field.providerFunction.call(service).subscribe((data) => {
			this.data = data;

			this.data.forEach((item) => {
				this.map[item[this.field.providerKey]] = item[this.field.providerLabel];
			});
		});
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

	ngOnDestroy() {
		this.getSubscription && this.getSubscription.unsubscribe();
	}
}