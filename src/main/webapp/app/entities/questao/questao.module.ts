import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Repo6SharedModule } from 'app/shared/shared.module';
import { QuestaoComponent } from './questao.component';
import { QuestaoDetailComponent } from './questao-detail.component';
import { QuestaoUpdateComponent } from './questao-update.component';
import { QuestaoDeleteDialogComponent } from './questao-delete-dialog.component';
import { questaoRoute } from './questao.route';

@NgModule({
  imports: [Repo6SharedModule, RouterModule.forChild(questaoRoute)],
  declarations: [QuestaoComponent, QuestaoDetailComponent, QuestaoUpdateComponent, QuestaoDeleteDialogComponent],
  entryComponents: [QuestaoDeleteDialogComponent]
})
export class Repo6QuestaoModule {}
