import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundModule } from '../not-found/not-found.module';
import { NotFoundComponent } from '../not-found/components/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/meal-editor',
	},
	{
		path: 'meal-editor',
		loadChildren: async ( ) => {
			const module = await import( '../meal-editor/meal-editor.module' );
			return module.MealEditorModule;
		},
	},
	{
		path: '**',
		component: NotFoundComponent,
	}
];

/**
 * Routing module for the root module.
 */
@NgModule({
	imports: [
		NotFoundModule,
		RouterModule.forRoot( routes ),
	],
	exports: [
		RouterModule,
	],
})
export class RootRoutingModule { }