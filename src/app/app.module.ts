import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    //AppComponent,
    MissionlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule,
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }