import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MealEditorRoutingModule } from './meal-editor-routing.module';
import { MealEditorComponent } from './components/meal-editor/meal-editor.component';

/**
 * Module for the meal editor feature.
 */
@NgModule({
	declarations: [
		MealEditorComponent,
	],
	imports: [
		CommonModule,
		MealEditorRoutingModule,
	],
	exports: [
		MealEditorComponent,
	],
})
export class MealEditorModule { }