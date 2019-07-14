import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PlainComponent } from './plain.component'; // do i need this ?

import { FormComponent } from './framework/form/form.component';
import { FieldComponent } from './framework/form/field/field.component';
import { InputComponent } from './framework/input/input.component';

import { FieldFactory } from './framework/form/field/field.factory';

import { FieldType } from './model/form/enum/field-type.enum';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		PlainComponent,
		FormComponent,
		FieldComponent,
		InputComponent
	],
	entryComponents: [
		InputComponent
	],
	providers: [
		FieldFactory
	],
	exports: [
		PlainComponent,
		FieldComponent,
		FormComponent
	]
})
export class PlainModule { }
