import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IFrases } from 'app/shared/model/frases.model';
import { FrasesService } from './frases.service';

@Component({
  templateUrl: './frases-delete-dialog.component.html'
})
export class FrasesDeleteDialogComponent {
  frases?: IFrases;

  constructor(protected frasesService: FrasesService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.frasesService.delete(id).subscribe(() => {
      this.eventManager.broadcast('frasesListModification');
      this.activeModal.close();
    });
  }
}
