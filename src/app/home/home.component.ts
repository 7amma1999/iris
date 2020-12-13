import { Component, OnInit, Sanitizer } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { DataServiceService } from "../services/data-service.service";
import { environment } from "../../environments/environment";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private dataService: DataServiceService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  iconsUrl = "../../assets/icons/";
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params: any) => {
      this.router.navigateByUrl("user/" + environment.msisdn + "/dashboard");
    });
  }
  pages = [
    {
      title: "Dashboard",
      link: "user/" + environment.msisdn + "/dashboard",
      iconUrl: this.iconsUrl + "dashboard (3).svg",
    },
    {
      title: "Call Centre",
      link: "user/" + environment.msisdn + "/call-centre",
      iconUrl: this.iconsUrl + "headset.svg",
    },
    {
      title: "Sales Call Centre",
      link: "user/" + environment.msisdn + "/sales-call-centre",
      iconUrl: this.iconsUrl + "iconmonstr-user-15 (2).svg",
    },
    {
      title: "Subscriber Info",
      link: "user/" + environment.msisdn + "/subscriber-info",
      iconUrl: this.iconsUrl + "bell (6).svg",
    },
    {
      title: "Recharges",
      link: "user/" + environment.msisdn + "/recharges",
      iconUrl: this.iconsUrl + "plug.svg",
    },
    {
      title: "Web Interactions",
      link: "user/" + environment.msisdn + "/web-interactions",
      iconUrl: this.iconsUrl + "iconmonstr-globe-1.svg",
    },
    {
      title: "USSD",
      link: "user/" + environment.msisdn + "/ussd",
      iconUrl: this.iconsUrl + "qr-code-scan.svg",
    },
    {
      title: "Applications",
      link: "user/" + environment.msisdn + "/applications",
      iconUrl: this.iconsUrl + "iconmonstr-window-4.svg",
    },
    {
      title: "Usage",
      link: "user/" + environment.msisdn + "/usage",
      iconUrl: this.iconsUrl + "iconmonstr-chart-12.svg",
    },
  ];
  photoURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
