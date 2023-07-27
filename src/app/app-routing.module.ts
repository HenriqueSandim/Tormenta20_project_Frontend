import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharSheetsComponent } from './char-sheets/char-sheets.component';

const routes: Routes = [
  {path: "char-sheet", component: CharSheetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
