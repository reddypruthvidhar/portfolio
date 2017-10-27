import { Component } from '@angular/core';
import { slideInOutAnimation } from './animations/slide-in-out';
import { slideInOutAnimation1 } from './animations/slide-in-out-1';

@Component ({
   selector: 'my-app',
   templateUrl: './contact.component.html',
   styleUrls: ['./contact.component.css'],
   animations: [slideInOutAnimation, slideInOutAnimation1]
})
export class AppContact  {
}
