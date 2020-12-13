import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../environments/environment";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "frontend";
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(["user", environment.msisdn]);
  }
}
