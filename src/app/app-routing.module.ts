import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewTaskComponent } from './pages/home/components/new-task/new-task.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path:'/new-task',
        component: NewTaskComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
