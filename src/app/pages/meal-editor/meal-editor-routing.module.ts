import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealEditorComponent } from './components/meal-editor/meal-editor.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: MealEditorComponent,
	},
];

/**
 * Routing module for the meal editor module.
 */
@NgModule({
	imports: [
		RouterModule.forChild( routes ),
	],
	exports: [
		RouterModule,
	],
})
export class MealEditorRoutingModule { }