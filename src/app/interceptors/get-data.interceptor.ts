import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpClient,
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "../../environments/environment";
import * as data from "../../assets/data/data.json";
@Injectable()
export class GetDataInterceptor implements HttpInterceptor {
  data: any;
  constructor(private http: HttpClient) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      request.method === "GET" &&
      request.url.includes("/msisdn/v1_0/full/")
    ) {
      return of(new HttpResponse({ status: 200, body: (data as any).default }));
    }
    next.handle(request);
  }
}
