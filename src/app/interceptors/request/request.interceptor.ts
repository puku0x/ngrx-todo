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
  constructor() {}

  /**
   * Interceptor for request
   * @param request request
   * @param next handler
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.match(/^\/api\//)) {
      const req = request.clone({
        url: `${environment.apiEndpoint}/${request.url.slice(4)}`
      });
      return next.handle(req);
    }
    return next.handle(request);
  }
}
