import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ComponentsModule } from "./components/components.module";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { CallCenterComponent } from "./pages/call-center/call-center.component";
import { SalesCallCenterComponent } from "./pages/sales-call-center/sales-call-center.component";
import { SubscriberInfoComponent } from "./pages/subscriber-info/subscriber-info.component";
import { RechargesComponent } from "./pages/recharges/recharges.component";
import { WebInteractionComponent } from "./pages/web-interaction/web-interaction.component";
import { UssdComponent } from "./pages/ussd/ussd.component";
import { ApplicationsComponent } from "./pages/applications/applications.component";
import { UsageComponent } from "./pages/usage/usage.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { GetDataInterceptor } from "./interceptors/get-data.interceptor";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CallCenterComponent,
    SalesCallCenterComponent,
    SubscriberInfoComponent,
    RechargesComponent,
    WebInteractionComponent,
    UssdComponent,
    ApplicationsComponent,
    UsageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GetDataInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
