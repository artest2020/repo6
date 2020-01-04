import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'instituicao',
        loadChildren: () => import('./instituicao/instituicao.module').then(m => m.Repo6InstituicaoModule)
      },
      {
        path: 'prova',
        loadChildren: () => import('./prova/prova.module').then(m => m.Repo6ProvaModule)
      },
      {
        path: 'edital',
        loadChildren: () => import('./edital/edital.module').then(m => m.Repo6EditalModule)
      },
      {
        path: 'questao',
        loadChildren: () => import('./questao/questao.module').then(m => m.Repo6QuestaoModule)
      },
      {
        path: 'enunciado',
        loadChildren: () => import('./enunciado/enunciado.module').then(m => m.Repo6EnunciadoModule)
      },
      {
        path: 'pergunta',
        loadChildren: () => import('./pergunta/pergunta.module').then(m => m.Repo6PerguntaModule)
      },
      {
        path: 'alternativa',
        loadChildren: () => import('./alternativa/alternativa.module').then(m => m.Repo6AlternativaModule)
      },
      {
        path: 'frases',
        loadChildren: () => import('./frases/frases.module').then(m => m.Repo6FrasesModule)
      },
      {
        path: 'resposta',
        loadChildren: () => import('./resposta/resposta.module').then(m => m.Repo6RespostaModule)
      },
      {
        path: 'resolucao-prova',
        loadChildren: () => import('./resolucao-prova/resolucao-prova.module').then(m => m.Repo6ResolucaoProvaModule)
      },
      {
        path: 'resolucao-questao',
        loadChildren: () => import('./resolucao-questao/resolucao-questao.module').then(m => m.Repo6ResolucaoQuestaoModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class Repo6EntityModule {}
