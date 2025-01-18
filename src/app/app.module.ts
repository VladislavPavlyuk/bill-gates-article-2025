import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { BiographyComponent } from './biography/biography.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    QuotesComponent,
    BiographyComponent,
    ResourcesComponent,
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: []
})
export class AppModule { }
