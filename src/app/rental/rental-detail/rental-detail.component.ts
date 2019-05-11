import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../../shared/rental.service';
import { Rental } from '../rental.model';


@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  rental: Rental;
  constructor( private _activatedRoute: ActivatedRoute,
               private _rentalService: RentalService) { }

  ngOnInit() {
  	this._activatedRoute.params.subscribe( (params)=> {
  			this.getRentalId(params['rentalId']);
  	})
  }

  getRentalId(rentalId: string) {
    this._rentalService.getRentalById(rentalId).subscribe( (rental: Rental) => {
      this.rental = rental;
    }, (error)=> {
      console.log("Error", error);
    }, () => {
      console.log("Complete");
    })
  }

}
