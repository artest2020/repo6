import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IAlternativa, Alternativa } from 'app/shared/model/alternativa.model';
import { AlternativaService } from './alternativa.service';

@Component({
  selector: 'jhi-alternativa-update',
  templateUrl: './alternativa-update.component.html'
})
export class AlternativaUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    ordem: []
  });

  constructor(protected alternativaService: AlternativaService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ alternativa }) => {
      this.updateForm(alternativa);
    });
  }

  updateForm(alternativa: IAlternativa): void {
    this.editForm.patchValue({
      id: alternativa.id,
      ordem: alternativa.ordem
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const alternativa = this.createFromForm();
    if (alternativa.id !== undefined) {
      this.subscribeToSaveResponse(this.alternativaService.update(alternativa));
    } else {
      this.subscribeToSaveResponse(this.alternativaService.create(alternativa));
    }
  }

  private createFromForm(): IAlternativa {
    return {
      ...new Alternativa(),
      id: this.editForm.get(['id'])!.value,
      ordem: this.editForm.get(['ordem'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IAlternativa>>): void {
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
