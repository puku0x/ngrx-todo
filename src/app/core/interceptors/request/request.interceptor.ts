import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Interceptor
 */
@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  private baseUrl = 'https://api.puku0x.net/v1';
  // baseUrl = 'http://localhost:8080/api/v1';

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
      url: `${this.baseUrl}${request.url}`
    });
    return next.handle(req);
  }
}
