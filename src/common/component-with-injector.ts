import {Injector, Type} from '@angular/core';

export interface ComponentWithInjector<T extends object = object> {
  component: Type<T>;
  injector: Injector;
}
