import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { tarefaListaComponent } from './tarefa-lista/tarefa-lista.component';
import { tarefaViewComponent } from './tarefa-view/tarefa-view.component';
import { tarefaFormComponent } from '../tarefa-form/tarefa-form.component';

const routes: Routes = [
  { path: '', component: tarefaListaComponent },
  { path: 'view/:id', component: tarefaViewComponent },
  { path: 'edit/:id', component: tarefaFormComponent },
  { path: 'new', component: tarefaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class tarefaRoutingModule { }