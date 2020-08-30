import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MealEditorComponent } from './meal-editor.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MealEditorRoutingModule } from '../../meal-editor-routing.module';

describe( 'MealEditorComponent', ( ) => {
	let component: MealEditorComponent;
	let fixture: ComponentFixture<MealEditorComponent>;

	beforeEach( async( ( ) => {
		TestBed
		.configureTestingModule({
			imports: [
				MealEditorRoutingModule,
			],
			declarations: [
				MealEditorComponent,
			],
			schemas: [
				CUSTOM_ELEMENTS_SCHEMA,
			],
		})
		.compileComponents( );
	}));

	beforeEach( ( ) => {
		fixture = TestBed.createComponent( MealEditorComponent );
		component = fixture.componentInstance;
		fixture.detectChanges( );
	});

	it( 'should be created', async ( ) => {
		expect( component ).toBeTruthy( );
	});

});