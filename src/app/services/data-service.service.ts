import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class DataServiceService {
  orderObj: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      console.log(params.get("msisdn"));
    });
  }

  /**
   * this function is to get the mock data from /msisdn/v1_0/full/{msisdn} endpoint
   */
  getData(msisdn: string) {
    return this.http.get(environment.apiUrl + "msisdn/v1_0/full/" + msisdn);
  }
}
