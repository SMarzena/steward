import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PluginDetailsComponent } from './pages/dashboard/plugin-details/plugin-details.component';


const routes: Routes = [{
  path: '',
  redirectTo: '/plugin',
  pathMatch: 'full'
},
{
  path: 'dashboard',
  component: DashboardComponent,
},
{
  path: 'plugin/:id',
  component: PluginDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SessionRoutingModule { }
