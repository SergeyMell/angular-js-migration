import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppRoutingModule } from './app-routing.module';
import {LoggerModule} from '../_deprecated/src/client/app/blocks/logger/logger.module';
import {WidgetsModule} from '../_deprecated/src/client/app/widgets/widgets.module';
import {HtWidgetHeaderComponent} from '../_deprecated/src/client/app/widgets/ht-widget-header.directive';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,

    LoggerModule,
    WidgetsModule
  ],
  providers: []
})
export class AppModule {

  constructor(private upgrade: UpgradeModule) {

  }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['app']);
  }

}
