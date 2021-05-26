import {Component} from '@angular/core';
import {Test} from '../common/test';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tests: Test[] = [
    {
      name: 'Test1',
      image: 'https://media-exp1.licdn.com/dms/image/C4E1BAQEbUiG0sVmFvg/company-background_10000/0/1614089979400?e=2159024400&v=beta&t=JMq7iPn96zi6949hFe2RNGhY4KWczp9GJyGQkjJQc2Q',
      type: 'first-type'
    },
    {
      name: 'Test2',
      image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGwGz5ADe3MXg/company-logo_200_200/0/1529565107497?e=2159024400&v=beta&t=5BN6W35r_RslFvoG2ldKvF2WiMFZA8iJuGMSmgvseqk',
      type: 'second-type'
    },
    {
      name: 'Test3',
      image: 'https://www.ejobs.ro/img/userCoverPhoto/2/a/2a64f27f7f9ae4ed5f3981f66f278739.png',
      type: 'third-type'
    }
  ];

  selectedTest: Test  = {
    image: '', name: '', type: ''
  };

  test(test: Test): void {
    this.selectedTest = test;
  }
}
