import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Repo6SharedModule } from 'app/shared/shared.module';
import { FrasesComponent } from './frases.component';
import { FrasesDetailComponent } from './frases-detail.component';
import { FrasesUpdateComponent } from './frases-update.component';
import { FrasesDeleteDialogComponent } from './frases-delete-dialog.component';
import { frasesRoute } from './frases.route';

@NgModule({
  imports: [Repo6SharedModule, RouterModule.forChild(frasesRoute)],
  declarations: [FrasesComponent, FrasesDetailComponent, FrasesUpdateComponent, FrasesDeleteDialogComponent],
  entryComponents: [FrasesDeleteDialogComponent]
})
export class Repo6FrasesModule {}
