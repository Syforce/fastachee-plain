import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PlainModule } from 'plain';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app.router';

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		PlainModule,
		AppRouterModule
	],
	declarations: [
		AppComponent
	],
	exports: [],
	providers: [],
	entryComponents: [],
	bootstrap: [AppComponent]
})
export class FastacheePlainModule { }