import { Component } from '@angular/core';
import { slideInOutAnimation } from './animations/slide-in-out';
import { slideInOutAnimation1 } from './animations/slide-in-out-1';

@Component ({
   selector: 'my-app',
   templateUrl: './about.component.html',
   styleUrls: ['./about.component.css'],
   animations: [slideInOutAnimation, slideInOutAnimation1]
})
export class AppAbout  {
}
