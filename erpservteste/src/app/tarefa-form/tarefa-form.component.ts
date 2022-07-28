import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {
  PoPageDynamicEditActions,
  PoPageDynamicEditField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.css'],
})
export class tarefaFormComponent implements OnInit {
  title = 'Nova tarefa';

  public readonly actions: PoPageDynamicEditActions = {
    cancel: '/',
    save: '/',
  };

  public readonly fields: Array<PoPageDynamicEditField> = [
    { property: 'id', key: true, visible: false },
    { label: 'Decrição', property: 'descricao', divider: 'Tarefa' },
    { label: 'Finalizadao', property: 'finalizada', type: 'boolean' },
    
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params['id'] ? 'Editando' : 'Nova tarefa';
    });
  }
}