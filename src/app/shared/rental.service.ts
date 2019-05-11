import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../rental/rental.model';

@Injectable()

export class RentalService { 

  rentalId : string;

	private rentals: Rental[] = [{
  		id : "1",
  		title: "Central Apartment",
  		city: "New Delhi",
  		street: "A3",
  		category: "Apartment",	
  		image: "http://via.placeholder.com/350x250",
  		bedroom: 2,
  		description: "Awesome furnished apartment",
  		dailyRate: 54,
  		shared: false,
  		createdAt: "17/03/19"
  },
  {
  		id : "2",
  		title: "Western Apartment",
  		city: "New Delhi",
  		street: "F3",
  		category: "Apartment",	
  		image: "http://via.placeholder.com/350x250",
  		bedroom: 3,
  		description: "Fully AC",
  		dailyRate: 124,
  		shared: false,
  		createdAt: "17/03/19"
  }, 
  {
  		id : "3",
  		title: "Northern Apartment",
  		city: "New Delhi",
  		street: "D45",
  		category: "Apartment",	
  		image: "http://via.placeholder.com/350x250",
  		bedroom: 2,
  		description: "Near Metro Station",
  		dailyRate: 11,
  		shared: false,
  		createdAt: "17/03/19"
  },

  {
  		id : "4",
  		title: "South Apartment",
  		city: "New Delhi",
  		street: "S3",
  		category: "Apartment",	
  		image: "http://via.placeholder.com/350x250",
  		bedroom: 2,
  		description: "Near by Haus khas villa",
  		dailyRate: 78,
  		shared: false,
  		createdAt: "17/03/19"
  },

  {
  		id : "5",
  		title: "White House",
  		city: "New Delhi",
  		street: "A3",
  		category: "House",	
  		image: "http://via.placeholder.com/350x250",
  		bedroom: 2,
  		description: "3 BHK",
  		dailyRate: 44,
  		shared: false,
  		createdAt: "17/03/19"
  },

  {
  		id : "6",
  		title: "Jakhmola Niwas",
  		city: "New Delhi",
  		street: "B149",
  		category: "House",	
  		image: "http://via.placeholder.com/350x250",
  		bedroom: 2,
  		description: "Near Shiv Mandir",
  		dailyRate: 67,
  		shared: false,
  		createdAt: "17/03/19"
  }];

  public getRentalById(rentalId): Observable<Rental> {
    return new Observable( (observer) => {
      setTimeout( () => {
          const findObservable = this.rentals.find( (rental) => {
              return rental.id == rentalId;
          });

          return observer.next(findObservable);
      }, 500);
      
    })
  }

  public getRental(): Observable<Rental[]> {

  	return new Observable( (observer) => {
  		setTimeout( () => {
  		observer.next(this.rentals);
  		}, 1000)
  	});

  }
}