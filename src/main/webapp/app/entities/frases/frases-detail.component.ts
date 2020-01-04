import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IFrases } from 'app/shared/model/frases.model';

@Component({
  selector: 'jhi-frases-detail',
  templateUrl: './frases-detail.component.html'
})
export class FrasesDetailComponent implements OnInit {
  frases: IFrases | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ frases }) => {
      this.frases = frases;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
