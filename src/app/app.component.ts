import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { BiographyComponent } from './biography/biography.component';
import { ResourcesComponent } from './resources/resources.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, QuotesComponent, BiographyComponent, ResourcesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: string[] = [];
  resources: string[] = [];
  newQuote: string = '';
  newResource: string = '';

  addQuote() {
    if (this.newQuote) {
      this.quotes.push(this.newQuote);
      this.newQuote = '';
    }
  }

  addResource() {
    if (this.newResource) {
      this.resources.push(this.newResource);
      this.newResource = '';
    }
  }
}
