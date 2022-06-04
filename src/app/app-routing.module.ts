import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [{ path: '', loadChildren: () => ClientModule, pathMatch: 'full' },
  { path: 'admin', loadChildren: () => AdminModule },
  { path: 'home', loadChildren: () => ClientModule },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
