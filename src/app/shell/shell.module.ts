import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@app/material.module';

import {ShellComponent} from './shell.component';
import {HeaderComponent} from './header/header.component';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {SidebarComponent} from '@app/shell/sidebar/sidebar.component';
import {CategoriesResourceService} from '@app/core/api-client';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, RouterModule, NgbCollapseModule],
  declarations: [HeaderComponent, ShellComponent, SidebarComponent],
  providers: [CategoriesResourceService]
})
export class ShellModule {}
