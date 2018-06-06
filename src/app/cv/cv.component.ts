import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.scss"]
})
export class CvComponent implements OnInit {
  private _jsonurl = "/assets/resume.json";

  items = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this._jsonurl).subscribe((data: any[]) => {
      if (data.length) {
        for (let i = 0; i < data.length; i++) {
          this.items = data;
        }
      }
    });
  }
}
