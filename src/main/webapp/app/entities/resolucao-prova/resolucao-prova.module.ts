import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Repo6SharedModule } from 'app/shared/shared.module';
import { ResolucaoProvaComponent } from './resolucao-prova.component';
import { ResolucaoProvaDetailComponent } from './resolucao-prova-detail.component';
import { ResolucaoProvaUpdateComponent } from './resolucao-prova-update.component';
import { ResolucaoProvaDeleteDialogComponent } from './resolucao-prova-delete-dialog.component';
import { resolucaoProvaRoute } from './resolucao-prova.route';

@NgModule({
  imports: [Repo6SharedModule, RouterModule.forChild(resolucaoProvaRoute)],
  declarations: [
    ResolucaoProvaComponent,
    ResolucaoProvaDetailComponent,
    ResolucaoProvaUpdateComponent,
    ResolucaoProvaDeleteDialogComponent
  ],
  entryComponents: [ResolucaoProvaDeleteDialogComponent]
})
export class Repo6ResolucaoProvaModule {}
