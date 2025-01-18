import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillGatesArticleComponent } from './bill-gates-article.component';

describe('BillGatesArticleComponent', () => {
  let component: BillGatesArticleComponent;
  let fixture: ComponentFixture<BillGatesArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillGatesArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillGatesArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
