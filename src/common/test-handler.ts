import {Test} from './test';
import {Injector} from '@angular/core';
import {ComponentWithInjector} from './component-with-injector';

export interface TestHandler<T extends Test> {
  canHandle(test: Test): test is T;

  getDetailComponent(test: Test, injector: Injector): Promise<ComponentWithInjector>;
}
