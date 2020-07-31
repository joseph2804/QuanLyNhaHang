import * as core from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Overviews/Overviews.component';
import { DefaultAdminComponent } from './default/default-admin/default-admin.component';
import { DefaultStaffComponent } from './default/default-staff/default-staff.component';

const routes: Routes = [

  {
    path: '', component: DefaultAdminComponent, // pathMatch: 'full' if use redirect,
    children: [
      { path: '', component: DashboardComponent},
      { path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
      { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule) },
      { path: 'forms', loadChildren: () => import('./forms/form.module').then(m => m.FormModule) },
      { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
      { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
      { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
      { path: 'error-pages', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },
    ]
  },
  {
    path: 'user', component: DefaultStaffComponent,
    children: [
      { path: 'staffs', loadChildren: () => import('./Staffs/staffs.module').then(m => m.StaffsModule) },
    ]
  }


];

@core.NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
