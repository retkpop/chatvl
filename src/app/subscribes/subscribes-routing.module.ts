import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { extract } from '@app/core';
import { SubscribesComponent } from '@app/subscribes/subscribes.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'subscribes', component: SubscribesComponent, data: { title: extract('Subscribes') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscribesRoutingModule {}
