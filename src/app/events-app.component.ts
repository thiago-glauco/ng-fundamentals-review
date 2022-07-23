import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <h1>Hello Angular</h1>
  
  <a href="https://pixabay.com/users/innovalabs-22783312/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6521720">Innova Labs</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6521720">Pixabay</a>
  `,
})
export class EventsAppComponent  {
  name = 'Angular ' + VERSION.major;
}
