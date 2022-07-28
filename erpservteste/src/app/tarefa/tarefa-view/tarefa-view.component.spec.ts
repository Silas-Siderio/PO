import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tarefaViewComponent } from './tarefa-view.component';

describe('tarefaViewComponent', () => {
  let component: tarefaViewComponent;
  let fixture: ComponentFixture<tarefaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tarefaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tarefaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});