import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path : "", component:WelcomeComponent},
  {path : "welcome", component:WelcomeComponent},
  {path : "question", component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
