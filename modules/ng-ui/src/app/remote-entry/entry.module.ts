import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  exports: [RemoteEntryComponent],
  imports: [CommonModule],
  providers: [],
})
export class RemoteEntryModule {}
