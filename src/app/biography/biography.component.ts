import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-biography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biography.component.html',
  styleUrl: './biography.component.css'
})
export class BiographyComponent {
  @Input() biography: string[] = [];

  newResource: any;
  newQuote: any;
}
