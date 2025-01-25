import { HttpInterceptorFn } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { __assign } from 'tslib';
import mockData from '../../../assets/mock/fixtures.json';

export const mockHttpInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.endsWith('/api/buildings') && req.method === 'GET') {
    const buildings = mockData['building'];

    return of(new HttpResponse({ status: 200, body: buildings }));
  }

  if (req.url.search('/api/buildings/1') && req.method === 'GET') {
    const building = Object.assign(mockData['buildings'][0]);
    building.privatives = [
      {
        "code": "00 01",
        "tenant": "Peter Vandekerhove"
      },
      {
        "code": "00 02",
        "tenant": "Dirk Heyns"
      },
    ]

    return of(new HttpResponse({ status: 200, body: building }));
  }

  if (req.url.endsWith('/api/customers') && req.method === 'GET') {
    const customers = mockData['customers'];

    return of(new HttpResponse({ status: 200, body: customers }));
  }

  if (req.url.search('/api/customers/1') && req.method === 'GET') {
    const customer = Object.assign(mockData['customers'][0]);
    customer.test = "tesat"

    return of(new HttpResponse({ status: 200, body: customer }));
  }

  return next(req);
};
