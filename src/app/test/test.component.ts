import {Component, Inject, Injector, Input, OnChanges, Optional, SimpleChanges} from '@angular/core';
import {TestHandler} from '../../common/test-handler';
import {Test} from '../../common/test';
import {TEST_HANDLERS} from '../app.tokens';
import {ComponentWithInjector} from '../../common/component-with-injector';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnChanges {
  handlers?: Array<TestHandler<Test>>;
  private injector: Injector;

  @Input()
  test: Test = {
    image: '', name: '', type: ''
  };

  constructor(injector: Injector,
              @Inject(TEST_HANDLERS) @Optional() handlers?: Array<TestHandler<Test>>,
              ) {
    this.injector = injector;
    this.handlers = handlers;
  }

  componentWithInjector: ComponentWithInjector | undefined;



  async changeComponent(): Promise<void> {
    const handler = this.handlers?.find(value => {
      return value.canHandle(this.test);
    });
    if (handler) {
      this.componentWithInjector = await handler.getDetailComponent(this.test, this.injector);
    }
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes.test) {
      await this.changeComponent();
    }
  }
}
