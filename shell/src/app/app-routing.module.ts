import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'mfe1',
    loadChildren: () => import('./remotes/your.module').then(m => m.YourModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
