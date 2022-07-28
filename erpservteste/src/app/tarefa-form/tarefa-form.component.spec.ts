import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tarefaFormComponent } from './tarefa-form.component';

describe('tarefaFormComponent', () => {
  let component: tarefaFormComponent;
  let fixture: ComponentFixture<tarefaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tarefaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tarefaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});