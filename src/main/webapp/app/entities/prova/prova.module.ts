import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Repo6SharedModule } from 'app/shared/shared.module';
import { ProvaComponent } from './prova.component';
import { ProvaDetailComponent } from './prova-detail.component';
import { ProvaUpdateComponent } from './prova-update.component';
import { ProvaDeleteDialogComponent } from './prova-delete-dialog.component';
import { provaRoute } from './prova.route';

@NgModule({
  imports: [Repo6SharedModule, RouterModule.forChild(provaRoute)],
  declarations: [ProvaComponent, ProvaDetailComponent, ProvaUpdateComponent, ProvaDeleteDialogComponent],
  entryComponents: [ProvaDeleteDialogComponent]
})
export class Repo6ProvaModule {}
