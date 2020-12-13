import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-small-identity-card",
  templateUrl: "./small-identity-card.component.html",
  styleUrls: ["./small-identity-card.component.scss"],
})
export class SmallIdentityCardComponent implements OnInit {
  @Input() type: string;
  constructor() {}

  ngOnInit(): void {}
}
