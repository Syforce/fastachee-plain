import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FastacheePlainModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(FastacheePlainModule)
  .catch(err => console.error(err));
