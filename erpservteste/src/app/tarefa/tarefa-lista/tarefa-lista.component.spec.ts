import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tarefaListaComponent } from './tarefa-lista.component';

describe('PeopleListComponent', () => {
  let component: tarefaListaComponent;
  let fixture: ComponentFixture<tarefaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tarefaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tarefaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});