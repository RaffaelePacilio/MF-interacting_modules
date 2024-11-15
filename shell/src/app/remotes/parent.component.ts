import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div class="parent__container">
      <h2>string received: {{stringReceived}}</h2>
      <app-your-component (formSubmitted)="onFormSubmitted($event)"></app-your-component>
    </div>
  `,
})
export class ParentComponent {

  stringReceived: string = ''

  onFormSubmitted(payload: string) {
    this.stringReceived = payload
  }
}
