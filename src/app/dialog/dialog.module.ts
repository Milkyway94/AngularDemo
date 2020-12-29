import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DialogComponent } from './dialog.component'
import { InsertionDirective } from './insertion.directive'
import { DialogConfig } from './dialog-config'
import { DialogRef } from './dialog-ref'
import { DialogService } from './dialog.service'
import { DialogInjector } from './dialog-injector'

@NgModule({
  imports: [CommonModule],
  declarations: [DialogComponent, InsertionDirective],
  entryComponents: [DialogComponent],
  providers:[DialogConfig, DialogRef ]
})
export class DialogModule {}