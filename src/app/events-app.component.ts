import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'events-app',
  template: '<h1>Hello Angular</h1>',
})
export class EventsAppComponent  {
  name = 'Angular ' + VERSION.major;
}
