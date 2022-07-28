import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PoPageDynamicDetailActions, PoPageDynamicDetailField } from '@po-ui/ng-templates';

@Component({
  selector: 'app-tarefa-view',
  templateUrl: './tarefa-view.component.html',
  styleUrls: ['./tarefa-view.component.css'],
})
export class PeopleViewComponent implements OnInit {
  title = 'Visualizando';

  readonly actions: PoPageDynamicDetailActions = {
    back: '/',
    edit: 'tarefa/edit/:id',
    remove: '/',
  };

  readonly fields: Array<PoPageDynamicDetailField> = [
    { property: 'id', gridColumns: 2, key: true, divider: 'Tarefa' },
    
    {
      property: 'descricao',
      type: 'string',
      label: 'Descrição',
      gridXlColumns: 4,
      gridLgColumns: 4,
    },
    {
      property: 'finalizada',
      tag: true,
      label: 'Finalizada',
      gridColumns: 2,
      gridSmColumns: 6,
    },
   
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params['id']
        ? `Visualizando Tarefa ${params['id']}`
        : 'Visualizando';
    });
  }
}