import {Injectable, Injector} from '@angular/core';
import {TestHandler} from './test-handler';
import {Test} from './test';
import {ComponentWithInjector} from './component-with-injector';
import {ThirdComponent} from '../app/third/third.component';
import {TEST_INFO} from '../app/app.tokens';

@Injectable()
export class ThirdTestHandler implements TestHandler<Test> {
  canHandle(test: Test): test is Test {
    return test.type === 'third-type';
  }

  async getDetailComponent(test: Test, injector: Injector): Promise<ComponentWithInjector> {
    return {
      component: ThirdComponent,
      injector: Injector.create({
        parent: injector,
        providers: [
          {
            provide: TEST_INFO,
            useValue: test
          }
        ]
      })
    };
  }
}
