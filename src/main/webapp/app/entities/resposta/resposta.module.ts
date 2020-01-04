import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Repo6SharedModule } from 'app/shared/shared.module';
import { RespostaComponent } from './resposta.component';
import { RespostaDetailComponent } from './resposta-detail.component';
import { RespostaUpdateComponent } from './resposta-update.component';
import { RespostaDeleteDialogComponent } from './resposta-delete-dialog.component';
import { respostaRoute } from './resposta.route';

@NgModule({
  imports: [Repo6SharedModule, RouterModule.forChild(respostaRoute)],
  declarations: [RespostaComponent, RespostaDetailComponent, RespostaUpdateComponent, RespostaDeleteDialogComponent],
  entryComponents: [RespostaDeleteDialogComponent]
})
export class Repo6RespostaModule {}
