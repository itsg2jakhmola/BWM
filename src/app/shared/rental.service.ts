import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../rental/rental.model';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class RentalService { 

  rentalId : string;

	private rentals: Rental[] = [];

  constructor( private _http: HttpClient ) {

  }


  public getRental(): Observable<any> {

      return this._http.get('api/v1/rentals');
  }

  public getRentalById(rentalId): Observable<any> {

    return this._http.get('api/v1/rentals/' + rentalId);

  }

}