import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUsersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient ) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUsersUrl).pipe(
      map(users => 
        users.map(user => ({ 
          ...user, 
          age: this.generateRandomAge() 
        }))
      )
    );
  }

  private generateRandomAge(): number {
    const minAge = 21;
    const maxAge = 60;
    const ageRange = maxAge - minAge + 1;
    const randomAge = Math.floor(Math.random() * ageRange) + minAge;
    return randomAge;
  }
}

