import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { CallCenterComponent } from "./pages/call-center/call-center.component";
import { SalesCallCenterComponent } from "./pages/sales-call-center/sales-call-center.component";
import { SubscriberInfoComponent } from "./pages/subscriber-info/subscriber-info.component";
import { RechargesComponent } from "./pages/recharges/recharges.component";
import { WebInteractionComponent } from "./pages/web-interaction/web-interaction.component";
import { UssdComponent } from "./pages/ussd/ussd.component";
import { ApplicationsComponent } from "./pages/applications/applications.component";
import { UsageComponent } from "./pages/usage/usage.component";
import { environment } from "../environments/environment";
const routes: Routes = [
  {
    path: "user/:msisdn",
    component: HomeComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "call-centre",
        component: CallCenterComponent,
      },
      {
        path: "sales-call-centre",
        component: SalesCallCenterComponent,
      },
      {
        path: "subscriber-info",
        component: SubscriberInfoComponent,
      },
      {
        path: "recharges",
        component: RechargesComponent,
      },
      {
        path: "web-interactions",
        component: WebInteractionComponent,
      },
      {
        path: "ussd",
        component: UssdComponent,
      },
      {
        path: "applications",
        component: ApplicationsComponent,
      },
      {
        path: "usage",
        component: UsageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
