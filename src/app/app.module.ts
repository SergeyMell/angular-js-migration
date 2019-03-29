import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';

import {AppRoutingModule} from './app-routing.module';
import {LoggerModule} from '../_deprecated/src/client/app/blocks/logger/logger.module';
import {WidgetsModule} from '../_deprecated/src/client/app/widgets/widgets.module';
import {AboutComponent} from './about/about.component';
import {UIRouterUpgradeModule} from '@uirouter/angular-hybrid';
import {UIRouter} from '@uirouter/core';

export function config(uiRouter: UIRouter) {
  uiRouter.urlService.rules.initial({ state: 'admin' });
}

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,

    UIRouterUpgradeModule.forRoot({
      states: [
        {
          name: 'about',
          url: '/about',
          path: 'about',
          component: AboutComponent,
        }
      ], config
    }),

    LoggerModule,
    WidgetsModule
  ],
  declarations: [
    AboutComponent
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
