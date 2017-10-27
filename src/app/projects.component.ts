import { Component } from '@angular/core';
import { fadeInAnimation } from './animations/fade';

@Component ({
    selector: 'my-app',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    animations: [ fadeInAnimation ]
})
export class AppProjects  {
}
