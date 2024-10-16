import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DonatePageComponent} from "./donate-page.component";

const routes: Routes = [
  {
    path: '',
    component: DonatePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonatePageRoutingModule { }
