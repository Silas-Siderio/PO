import { Component } from '@angular/core';
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-tarefa-lista',
  templateUrl: './tarefa-lista.component.html',
  styleUrls: ['./tarefa-lista.component.css'],
})
export class tarefaListaComponent {
  readonly actions: PoPageDynamicTableActions = {
    detail: 'tarefa/view/:id',
    edit: 'tarefa/edit/:id',
    new: 'tarefa/new',
    remove: true,
  };

  readonly fields: Array<PoPageDynamicTableField> = [
   
    { property: 'descricao', label: 'Descrição' },
    { property: 'finalizada', label: 'Finalizada' },
  ];
}