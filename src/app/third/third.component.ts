import {Component, Inject} from '@angular/core';
import {TEST_INFO} from '../app.tokens';
import {Test} from '../../common/test';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent {

  constructor(@Inject(TEST_INFO) test: Test) {
    this.test = test; }

  test: Test;
}
