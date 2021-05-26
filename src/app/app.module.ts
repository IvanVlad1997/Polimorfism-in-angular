import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TEST_HANDLERS} from './app.tokens';
import {FirstTestHandler} from '../common/first-test-handler';
import {SecondTestHandler} from '../common/second-test-handler';
import {ThirdTestHandler} from '../common/third-test-handler';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexModule
  ],
  providers: [
    {
      provide: TEST_HANDLERS,
      useClass: FirstTestHandler,
      multi: true
    },
    {
      provide: TEST_HANDLERS,
      useClass: SecondTestHandler,
      multi: true
    },
    {
      provide: TEST_HANDLERS,
      useClass: ThirdTestHandler,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
