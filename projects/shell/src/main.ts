import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { routerFeature } from './app/booking/+state/router.state';
import { CoreModule } from './app/core/core.module';
import { appRoutes } from './app/app.routes';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      CoreModule,
      RouterModule.forRoot(appRoutes),
      StoreModule.forRoot(),
      EffectsModule.forRoot(),
      StoreDevtoolsModule.instrument(),
      StoreModule.forFeature(routerFeature),
      StoreRouterConnectingModule.forRoot()
    )
  ]
});
