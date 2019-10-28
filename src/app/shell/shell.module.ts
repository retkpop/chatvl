import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, RouterModule],
  exports: [
    SidebarComponent
  ],
  declarations: [HeaderComponent, SidebarComponent, ShellComponent]
})
export class ShellModule {}
