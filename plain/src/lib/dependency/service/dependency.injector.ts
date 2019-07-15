import { Injectable, Injector } from '@angular/core';

@Injectable({
	providedIn: "root"
})
export class DependencyInjector {
	private dependencies = {};

	constructor() {
		// for (let i = 0; i < arguments.length; i++) {
		// 	if (arguments[i]) {
		// 		this.setDependency(arguments[i]);
		// 	}
		// }
	}

	private setDependency(injectable) {
		const name: string = injectable.constructor.name;
		this.dependencies[name] = injectable;
		console.log(`%c Registered ${name} `, 'background: #339900; color: #fff;');
	}

	public getDependency(name: string) {
		return this.dependencies[name];
	}
}