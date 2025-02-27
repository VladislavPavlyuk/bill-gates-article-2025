import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  resources: string[] = [
    'https://en.wikipedia.org/wiki/Bill_Gates',
    'https://www.gatesfoundation.org/',
    'https://www.gatesnotes.com/',
    'https://twitter.com/billgates"'
    ];
  @Input() newResources: string[] = [];
}
