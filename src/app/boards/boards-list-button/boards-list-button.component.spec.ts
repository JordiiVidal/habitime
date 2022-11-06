import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsListButtonComponent } from './boards-list-button.component';

describe('BoardsListButtonComponent', () => {
  let component: BoardsListButtonComponent;
  let fixture: ComponentFixture<BoardsListButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BoardsListButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardsListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
