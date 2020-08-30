import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';

/**
 * Module for the Not Found page, displayed when the user is directed to an unknown or unavailable route.
 */
@NgModule({
	declarations: [
		NotFoundComponent,
	],
	imports: [
		CommonModule,
	],
	exports: [
		NotFoundComponent,
	],
})
export class NotFoundModule { }