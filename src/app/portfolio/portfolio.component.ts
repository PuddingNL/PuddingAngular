import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// Compontent.
@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {
  constructor(private http: HttpClient) {}
  private _jsonurl = "/assets/portfolio.json";
  cards = [];

  ngOnInit() {
    this.http.get(this._jsonurl).subscribe((data: any[]) => {
      if (data.length) {
        this.cards = data;
      }
    });
  }
}
