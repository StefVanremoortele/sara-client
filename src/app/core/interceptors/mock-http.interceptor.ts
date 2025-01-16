import { HttpInterceptorFn } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import mockData from '../../../assets/mock-data.json';

export const mockHttpInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.endsWith('/api/customers') && req.method === 'GET') {
    const customerData = mockData['customers'];

    return of(new HttpResponse({ status: 200, body: customerData }));
  }
  console.log(req);

  if (req.url.search('/api/customers/1') && req.method === 'GET') {
    const customerData = mockData['customers'];

    const customerDetails = customerData.find((c) => c.id == 1);

    return of(new HttpResponse({ status: 200, body: customerDetails }));
  }

  return next(req);
};
