import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IFrases, Frases } from 'app/shared/model/frases.model';
import { FrasesService } from './frases.service';

@Component({
  selector: 'jhi-frases-update',
  templateUrl: './frases-update.component.html'
})
export class FrasesUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    descricao: [],
    verdadeira: []
  });

  constructor(protected frasesService: FrasesService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ frases }) => {
      this.updateForm(frases);
    });
  }

  updateForm(frases: IFrases): void {
    this.editForm.patchValue({
      id: frases.id,
      descricao: frases.descricao,
      verdadeira: frases.verdadeira
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const frases = this.createFromForm();
    if (frases.id !== undefined) {
      this.subscribeToSaveResponse(this.frasesService.update(frases));
    } else {
      this.subscribeToSaveResponse(this.frasesService.create(frases));
    }
  }

  private createFromForm(): IFrases {
    return {
      ...new Frases(),
      id: this.editForm.get(['id'])!.value,
      descricao: this.editForm.get(['descricao'])!.value,
      verdadeira: this.editForm.get(['verdadeira'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IFrases>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
