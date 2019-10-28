import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {Shell} from '@app/shell/shell.service';
import {extract} from '@app/core';
import {VideosComponent} from '@app/single/videos/videos.component';


const routes: Routes = [
  // tslint:disable-next-line:max-line-length
  Shell.unAuthenticatedChildRoutes([
    { path: 'video/:slug', component: VideosComponent, data: { title: extract('Single') }, runGuardsAndResolvers: 'always' }])
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: []
})
export class VideosRoutingModule { }
