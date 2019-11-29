import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from '@src/app/pages/pages.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
