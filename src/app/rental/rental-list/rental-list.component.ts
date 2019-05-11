import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../shared/rental.service';
import { Rental  } from '../rental.model';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentalLists: Rental[] = [];

  constructor( private _rentalService: RentalService ) {  }

  ngOnInit() {
  	//this.rentalLists = this._rentalService.getRental();
  	const rentalObserve = this._rentalService.getRental();
  	rentalObserve.subscribe( 
  	(data: Rental[]) => {
  		this.rentalLists = data;
  	}, (error) => {
  		console.log(error);
  	}, () => {
  		console.log();
  	})
  }

}
