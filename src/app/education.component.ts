import { Component } from '@angular/core';
import { fadeInAnimation } from './animations/fade';
import { slideInOutAnimation } from './animations/slide-in-out';
import { slideInOutAnimation1 } from './animations/slide-in-out-1';


@Component ({
    selector: 'my-app',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css'],
    animations: [fadeInAnimation, slideInOutAnimation, slideInOutAnimation1]
})
export class AppEducation  {
}
