import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-plain',
  template: `
    <p>
      plain works!
    </p>
  `,
  styles: []
})
export class PlainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
