import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardListButtonComponent } from './board-list-button.component';

describe('BoardListButtonComponent', () => {
  let component: BoardListButtonComponent;
  let fixture: ComponentFixture<BoardListButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BoardListButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
