import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { SmallIdentityCardComponent } from "./small-identity-card/small-identity-card.component";
import { DaysChangingComponent } from "./days-changing/days-changing.component";
import { CallCenterSummaryCardComponent } from "./call-center-summary-card/call-center-summary-card.component";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    HeaderComponent,
    SmallIdentityCardComponent,
    DaysChangingComponent,
    CallCenterSummaryCardComponent,
  ],
  imports: [CommonModule, FlexLayoutModule],
  exports: [
    HeaderComponent,
    CallCenterSummaryCardComponent,
    SmallIdentityCardComponent,
    DaysChangingComponent,
  ],
})
export class ComponentsModule {}
