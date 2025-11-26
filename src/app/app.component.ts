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
  title = 'Bill Gates Article';

  quotes: string[] = [];
  resources: string[] = [];
  newQuote: string = '';
  newResource: string = '';

  @ViewChild(QuotesComponent) quotesComponent!: QuotesComponent;
  @ViewChild(ResourcesComponent) resourcesComponent!: ResourcesComponent;

  addQuote() {
    if (this.newQuote.trim()) {
      this.quotes.push(this.newQuote.trim());
      // Использование @ViewChild для доступа к методу дочернего компонента
      if (this.quotesComponent) {
        // @ViewChild используется для доступа к методу получения количества цитат
        const totalCount = this.quotesComponent.getQuotesCount();
        console.log('Total quotes count:', totalCount);
      }
      this.newQuote = '';
    }
  }

  addResource() {
    if (this.newResource.trim()) {
      this.resources.push(this.newResource.trim());
      // Использование @ViewChild для доступа к свойству дочернего компонента
      // (проверка доступности компонента)
      if (this.resourcesComponent) {
        // @ViewChild используется для доступа к методу получения количества ресурсов
        const totalCount = this.resourcesComponent.getResourcesCount();
        console.log('Total resources count:', totalCount);
      }
      this.newResource = '';
    }
  }

}
