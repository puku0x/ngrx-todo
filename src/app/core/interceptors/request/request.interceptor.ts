import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

/**
 * Interceptor
 */
@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  /**
   * Constructor
   */
  constructor() { }

  /**
   * Add base URL
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = request.clone({
      url: `${environment.baseUrl}${request.url}`
    });
    return next.handle(req);
  }
}
