import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppRoutingModule } from './app-routing.module';
import {LoggerModule} from '../_deprecated/src/client/app/blocks/logger/logger.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,

    LoggerModule
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
