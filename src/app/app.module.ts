import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MatListModule } from '@angular/material/list';
const routes: Routes = [
  { path: '', component: MissionlistComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule,
    RouterModule.forRoot(routes),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }