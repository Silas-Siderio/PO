import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { tarefaRoutingModule} from './tarefa-rota.module';
import { tarefaListaComponent } from './tarefa-lista/tarefa-lista.component';
import { tarefaViewComponent } from './tarefa-view/people-view.component';
import { tarefaFormComponent } from './tarefa-form/people-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [tarefaListaComponent, tarefaViewComponent, tarefaFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    tarefaRoutingModule
  ]
})
export class tarefaModule { }