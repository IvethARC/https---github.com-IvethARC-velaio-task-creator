import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  taskForm: FormGroup;
  taskNameValue: string = '';

  constructor( private fb: FormBuilder ){
    this.taskForm = this.fb.group({
      taskName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmitFormData() {
    if (this.taskForm.valid) {
      this.taskNameValue = this.taskForm.get('taskName')?.value;
    }
  }
}
