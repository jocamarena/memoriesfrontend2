import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MemoriesComponent} from './memories/memories/memories.component';
import {MemoryComponent} from './memories/memory/memory.component';
import {RouterModule, Routes} from "@angular/router";
import {LoadmemoriesService} from "./memories/loadmemories.service";
import {FormsModule} from "@angular/forms";
import { TempconversionComponent } from './utils/tempconversion/tempconversion.component';
import { AddmemoryComponent } from './memories/addmemory/addmemory.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/memories', pathMatch: 'full'},
  {
    path: 'memories', component: MemoriesComponent, children: [
      {path: 'new', component: AddmemoryComponent},
      {path: ':id', component: MemoryComponent}
    ]
  },
  {path: 'tempconversion', component: TempconversionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MemoriesComponent,
    MemoryComponent,
    TempconversionComponent,
    AddmemoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [LoadmemoriesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
