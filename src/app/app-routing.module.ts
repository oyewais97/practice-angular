import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildItemComponent } from './child-item/child-item.component';
const routes: Routes = [
  {
    path: 'child',
    component: ChildItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
