import {Component, Inject} from '@angular/core';
import {TEST_INFO} from '../app.tokens';
import {Test} from '../../common/test';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  constructor(@Inject(TEST_INFO) test: Test) {
    this.test = test; }

  test: Test;
}
