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
   * Interceptor for request
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = request.clone({
      url: this.addApiEndpoint(request.url)
    });
    return next.handle(req);
  }

  /**
   * Add API endpoint url
   * @param url
   */
  private addApiEndpoint(url: string) {
    if (url.indexOf('http://') >= 0 || url.indexOf('https://') >= 0) {
      return url;
    } else {
      return `${environment.apiEndpoint}${url}`;
    }
  }
}
