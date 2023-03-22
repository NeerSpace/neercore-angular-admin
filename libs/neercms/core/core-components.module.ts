import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToastAreaComponent } from './toast/toast-area.component';

@NgModule({
  declarations: [
    ButtonComponent,
    DropdownComponent,
    LoadingBarComponent,
    ModalConfirmComponent,
    ToastAreaComponent,
    TabComponent,
    TabsComponent,
  ],
  exports: [
    LoadingBarComponent,
    ButtonComponent,
    ModalConfirmComponent,
    ToastAreaComponent,
    TabsComponent,
    TabComponent,
    DropdownComponent,
  ],
  imports: [CommonModule],
})
export class CoreComponentsModule {}
