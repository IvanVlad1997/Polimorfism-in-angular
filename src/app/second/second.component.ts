import {Component, Inject} from '@angular/core';
import {TEST_INFO} from '../app.tokens';
import {Test} from '../../common/test';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  constructor(@Inject(TEST_INFO) test: Test) {
    this.test = test; }

  test: Test;
}
