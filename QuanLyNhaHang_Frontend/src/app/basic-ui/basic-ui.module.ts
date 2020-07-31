import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionsComponent } from './Merchandises/Merchandises.component';
import { BadgesComponent } from './RPMerchandises/RPMerchandises.component';
import { BreadcrumbsComponent } from './Orders/Orders.component';
import { DropdownsComponent } from './ImportMerchandises/ImportMerchandises.component';
import { ModalsComponent } from './Warehouse/Warehouse.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FormsModule} from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  { path: 'accordions', component: AccordionsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'dropdowns', component: DropdownsComponent },
  { path: 'dropdowns', component: DropdownsComponent },
  { path: 'modals', component: ModalsComponent },
  { path: 'progressbar', component: ProgressbarComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'notifications', component: NotificationsComponent },
];

@NgModule({
  declarations: [AccordionsComponent, BadgesComponent, BreadcrumbsComponent, DropdownsComponent, ModalsComponent, PaginationComponent, ProgressbarComponent, TabsComponent, TooltipsComponent, NotificationsComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ModalModule.forChild(),
    RouterModule.forChild(routes),
  ]
})
export class BasicUiModule { }
