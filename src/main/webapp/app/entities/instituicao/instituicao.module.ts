import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Repo6SharedModule } from 'app/shared/shared.module';
import { InstituicaoComponent } from './instituicao.component';
import { InstituicaoDetailComponent } from './instituicao-detail.component';
import { InstituicaoUpdateComponent } from './instituicao-update.component';
import { InstituicaoDeleteDialogComponent } from './instituicao-delete-dialog.component';
import { instituicaoRoute } from './instituicao.route';

@NgModule({
  imports: [Repo6SharedModule, RouterModule.forChild(instituicaoRoute)],
  declarations: [InstituicaoComponent, InstituicaoDetailComponent, InstituicaoUpdateComponent, InstituicaoDeleteDialogComponent],
  entryComponents: [InstituicaoDeleteDialogComponent]
})
export class Repo6InstituicaoModule {}
