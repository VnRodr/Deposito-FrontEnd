import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { DashboardComponent } from "../../components/dashboard/dashboard";

@Component({
  selector: 'app-home-page',
  imports: [DashboardComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePageComponent {

}
