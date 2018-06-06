import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  menuOpen: boolean = false;
  menuScroll: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset > 600) {
      this.menuScroll = true;
    } else {
      this.menuScroll = false;
    }
  }
}
