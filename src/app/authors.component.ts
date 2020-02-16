import { Component } from '@angular/core';

@Component({
  selector: 'authors',
  template: `
  <h2>{{ authors.length }} Authors</h2>
  <ul>
      <li *ngFor="let author of authors">
          {{author}}
      </li>
  </ul>
  `
})
export class AuthorsComponent{
    authors;

  constructor() { 
      this.authors  = ["author1", "author2", "author3"];
  }


}


