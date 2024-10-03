import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../../../../core/models/person.model';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  taskForm: FormGroup;
  taskNameValue: string = '';
  isOldDeveloper = false;

  persons: Person[] = [];
  selectedPerson: Person | null = null;
  newDeveloper = { name: '', age: null };

  constructor( private fb: FormBuilder,
    private taskService: TaskService
   ){
    this.taskForm = this.fb.group({
      taskName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): void {
    this.taskService.getPersons().subscribe((data: Person[]) => {
      this.persons = data;
    });
  }

  selectOldDeveloper(): void {
    this.isOldDeveloper = true;
  }
  selectNewDeveloper(): void {
    this.isOldDeveloper = false;
  }

  onSubmitFormData() {
    if (this.taskForm.valid) {
      this.taskNameValue = this.taskForm.get('taskName')?.value;
    }
  }
}
