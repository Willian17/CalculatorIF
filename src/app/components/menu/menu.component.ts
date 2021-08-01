import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  showSidenav: boolean = false;

  @ViewChild('sidenav') sidenav: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  menuSelected(paths: string[]): boolean {
    return paths.includes(this.router.url)
  }

  showOrHideSidenav() {
    this.showSidenav = !this.showSidenav;
    this.sidenav.toggle();
  }

}
