import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path:'new-task',
        component: NewTaskComponent
      },
      {
        path:'list-task',
        component: ListTaskComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
