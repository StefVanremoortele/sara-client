import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import mockData from '@syndicus/../assets/mock/fixtures.json';
import { MOCK_USERS } from '@syndicus/../assets/mock/user.mock';

@Injectable({
	providedIn: 'root'
})
export class MockService {
	buildings = [
		{
			id: 1,
			name: 'Empire State Building',
			address: '350 5th Ave, New York, NY 10118, USA',
			floors: 102,
			yearConstructed: 1931
		},
		{
			id: 2,
			name: 'Burj Khalifa',
			address: '1 Sheikh Mohammed bin Rashid Blvd, Dubai, UAE',
			floors: 163,
			yearConstructed: 2010
		},
		{
			id: 3,
			name: 'Eiffel Tower',
			address: 'Champ de Mars, 5 Avenue Anatole, Paris, France',
			floors: 3,
			yearConstructed: 1889
		},
		{
			id: 4,
			name: 'Shanghai Tower',
			address: '501 Yincheng Middle Rd, Lujiazui, Shanghai, China',
			floors: 128,
			yearConstructed: 2015
		},
		{
			id: 5,
			name: 'The Shard',
			address: '32 London Bridge St, London, UK',
			floors: 95,
			yearConstructed: 2012
		},
		{
			id: 6,
			name: 'Willis Tower',
			address: '233 S Wacker Dr, Chicago, IL 60606, USA',
			floors: 110,
			yearConstructed: 1973
		},
		{
			id: 7,
			name: 'Petronas Towers',
			address: 'Kuala Lumpur City Centre, Kuala Lumpur, Malaysia',
			floors: 88,
			yearConstructed: 1998
		},
		{
			id: 8,
			name: 'Taipei 101',
			address: '7 Section 5, Xinyi Rd, Taipei, Taiwan',
			floors: 101,
			yearConstructed: 2004
		},
		{
			id: 9,
			name: 'One World Trade Center',
			address: '285 Fulton St, New York, NY 10007, USA',
			floors: 104,
			yearConstructed: 2014
		},
		{
			id: 10,
			name: 'Marina Bay Sands',
			address: '10 Bayfront Ave, Singapore',
			floors: 57,
			yearConstructed: 2010
		}
	]

	customers = [
		{
			id: 1,
			name: 'John Doe',
			email: 'john.doe@example.com',
			phone: '+1-202-555-0173',
			address: '123 Main St, Springfield, USA'
		},
		{
			id: 2,
			name: 'Jane Smith',
			email: 'jane.smith@example.com',
			phone: '+1-303-555-0198',
			address: '456 Elm St, Metropolis, USA'
		},
		{
			id: 3,
			name: 'Michael Johnson',
			email: 'michael.johnson@example.com',
			phone: '+1-404-555-0112',
			address: '789 Oak St, Gotham, USA'
		},
		{
			id: 4,
			name: 'Emily Davis',
			email: 'emily.davis@example.com',
			phone: '+1-505-555-0134',
			address: '101 Pine St, Star City, USA'
		}
	]

	suppliers = [
		{
			id: 1,
			name: 'ABC Supplies',
			email: 'contact@abcsupplies.com',
			phone: '+32-2-555-1234',
			address: '123 Supply St, Brussels, Belgium',
			btwNumber: 'BE0123456789'
		},
		{
			id: 2,
			name: 'Global Tools',
			email: 'info@globaltools.com',
			phone: '+32-3-555-5678',
			address: '456 Tool Ave, Antwerp, Belgium',
			btwNumber: 'BE9876543210'
		},
		{
			id: 3,
			name: 'FastParts Inc.',
			email: 'support@fastparts.com',
			phone: '+32-4-555-9101',
			address: '789 Part Blvd, Liège, Belgium',
			btwNumber: 'BE1234567890'
		},
		{
			id: 4,
			name: 'Euro Hardware',
			email: 'sales@eurohardware.com',
			phone: '+32-5-555-1122',
			address: '321 Hardware Rd, Ghent, Belgium',
			btwNumber: 'BE0987654321'
		}
	]

	privatives: any = [];

	constructor() {
		this.privatives = mockData['privatvies'];
	}

	getBuildings() {
		return of(this.buildings);
	}

	getCustomers() {
		return of(this.customers);
	}

	getSuppliers() {
		return of(this.suppliers);
	}

	getPrivatives() {
		return of(this.privatives);
	}

	getAnonymousUser() {
		return MOCK_USERS.anonymous;
	}

	getLoggedInUser() {
		return MOCK_USERS.loggedIn;
	}
}
