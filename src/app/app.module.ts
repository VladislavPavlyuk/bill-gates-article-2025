import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
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
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    RouterModule
  ],
  providers: []
})
export class AppModule { }
