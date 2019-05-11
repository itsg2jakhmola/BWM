import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalComponent } from './rental.component';
import { Routes, RouterModule } from '@angular/router';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalService } from '../shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { SliderComponent } from './../slider-component/slider-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
	{   path: 'rentals', 
		component: RentalComponent,
		children: [
			{ path: '', component: RentalListComponent },
			{ path: ':rentalId', component: RentalDetailComponent },
		]
	},
	{   path: 'sliders', 
		component: SliderComponent,
		children: [
			
		]
	}														
];

@NgModule({
	declarations: [
		RentalComponent,
		SliderComponent,
		RentalListComponent,
		RentalListItemComponent,
		RentalDetailComponent
	],
	imports : [
	CommonModule,
	NgbModule,
	RouterModule.forChild(routes)
	],
	providers: [RentalService]
})

export class RentalModule {

}