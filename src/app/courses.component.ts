import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
    selector: 'courses', 
    template: `
       
    `
})
export class CoursesComponent {
    email = "me@example.com";

    onKeyUp(email){
        console.log(this.email);
    }

}