import { Component } from '@angular/core';

interface Person {
  id: string;
  name: string;
  textColor: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  peoples: Person[] = [
    { id: '1', name: 'Piotr', textColor: 'red' },
    { id: '2', name: 'Lukasz', textColor: 'blue' },
    { id: '3', name: 'Adrian', textColor: 'yellow' },
  ];
}
