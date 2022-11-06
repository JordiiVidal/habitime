import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsListCardComponent } from './boards-list-card.component';

describe('BoardsListCardComponent', () => {
  let component: BoardsListCardComponent;
  let fixture: ComponentFixture<BoardsListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BoardsListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardsListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
