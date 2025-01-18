import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BillGatesArticleComponent } from "./bill-gates-article/bill-gates-article.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BillGatesArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bill-gates-article';
}
