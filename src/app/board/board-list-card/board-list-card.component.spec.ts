import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardListCardComponent } from './board-list-card.component';

describe('BoardListCardComponent', () => {
  let component: BoardListCardComponent;
  let fixture: ComponentFixture<BoardListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BoardListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
