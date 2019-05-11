import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalComponent } from './rental/rental.component';
import { RentalDetailComponent } from './rental/rental-detail/rental-detail.component';
import { RentalListItemComponent } from './rental/rental-list-item/rental-list-item.component';

const routes: Routes = [
	{path: '', redirectTo: '/rentals', pathMatch:'full'},
	{path: 'slider', redirectTo: '/sliders', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [	]
})
export class AppRoutingModule { }
