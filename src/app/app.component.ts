import { Component,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { QuotesComponent } from './quotes/quotes.component';
import { BiographyComponent } from './biography/biography.component';
import { ResourcesComponent } from './resources/resources.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    QuotesComponent,
    BiographyComponent,
    ResourcesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  quotes: string[] = [];
  resources: string[] = [];
  newQuote: string = '';
  newResource: string = '';
  //currentView: string = 'quotes';

  @ViewChild(QuotesComponent) quotesComponent!: QuotesComponent;
  @ViewChild(ResourcesComponent) resourcesComponent!: ResourcesComponent;

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
