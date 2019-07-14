import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PlainModule } from '@plain/plain.module';

import { AppComponent } from './app.component';

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		PlainModule
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