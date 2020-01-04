import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IFrases } from 'app/shared/model/frases.model';
import { FrasesService } from './frases.service';
import { FrasesDeleteDialogComponent } from './frases-delete-dialog.component';

@Component({
  selector: 'jhi-frases',
  templateUrl: './frases.component.html'
})
export class FrasesComponent implements OnInit, OnDestroy {
  frases?: IFrases[];
  eventSubscriber?: Subscription;

  constructor(protected frasesService: FrasesService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.frasesService.query().subscribe((res: HttpResponse<IFrases[]>) => {
      this.frases = res.body ? res.body : [];
    });
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInFrases();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IFrases): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInFrases(): void {
    this.eventSubscriber = this.eventManager.subscribe('frasesListModification', () => this.loadAll());
  }

  delete(frases: IFrases): void {
    const modalRef = this.modalService.open(FrasesDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.frases = frases;
  }
}
