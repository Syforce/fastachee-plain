import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class DependencyInjector {
	private dependencies = {};

	public getDependency(name: string) {
		const injectable = this.dependencies[name];

		if (!injectable) {
			console.log(`%c Dependency ${name} is not loaded`, 'background: #993300; color: #fff;');
		}

		return injectable;
	}

	public setDependency(injectable) {
		const name: string = injectable.constructor.name;
		this.dependencies[name] = injectable;
		console.log(`%c Dependency ${name} added`, 'background: #339900; color: #fff;');
	}
}