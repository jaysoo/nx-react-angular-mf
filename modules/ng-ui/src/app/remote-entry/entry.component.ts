import { Component } from '@angular/core';
import { util1} from 'ng-util-1/util-1';
@Component({
  selector: 'mf2-ng-ui-entry',
  template: `<h2>{{title}}</h2><p>Hello UI!!!</p>`,
})
export class RemoteEntryComponent {
  title = util1();
}
