import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourComponent } from './your.component';
import { Routes, RouterModule } from '@angular/router';
import {ParentComponent} from "./parent.component";

const routes: Routes = [
  {
    path: '',
    component: ParentComponent
  }
];

@NgModule({
  declarations: [YourComponent, ParentComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [YourComponent],
})
export class YourModule {}
