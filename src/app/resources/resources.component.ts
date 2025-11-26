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
    'https://twitter.com/billgates'
    ];
  @Input() newResources: string[] = [];

  // Метод для добавления ресурса, доступный через @ViewChild
  addResource(resource: string): void {
    if (resource && resource.trim()) {
      this.resources.push(resource.trim());
    }
  }

  // Метод для получения количества ресурсов
  getResourcesCount(): number {
    return this.resources.length + this.newResources.length;
  }
}
