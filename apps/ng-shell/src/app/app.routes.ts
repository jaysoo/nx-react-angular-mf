import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'feat-4',
    loadChildren: () =>
      import('feat-4/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'feat-3',
    loadChildren: () =>
      import('feat-3/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
