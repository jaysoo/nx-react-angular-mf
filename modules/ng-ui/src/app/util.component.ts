import { Component } from '@angular/core';
import {util1} from 'ng-util-1/util-1'

@Component({
  selector: 'mf2-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.css'],
})
export class UtilComponent {
  title = util1();
}
