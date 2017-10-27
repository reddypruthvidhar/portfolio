import { Component } from '@angular/core';
import { fadeInAnimation } from './animations/fade';

@Component ({
    selector: 'my-app',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css'],
    animations: [ fadeInAnimation ]
})
export class AppExperience  {
}
