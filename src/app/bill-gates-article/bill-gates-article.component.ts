import { Component } from '@angular/core';

@Component({
  selector: 'app-bill-gates-article',
  templateUrl: './bill-gates-article.component.html',
  styleUrls: ['./bill-gates-article.component.css']
})
export class BillGatesArticleComponent {
  quotes: string[] = [
    'Patience is a key element of success',
    'If you think your teacher is tough, wait till you get a boss',
    'Life is not fair — get used to it!',
    'Success is a lousy teacher. It seduces smart people into thinking they can’t lose',
    'Be nice to nerds. Chances are you’ll end up working for one'
  ];
}
