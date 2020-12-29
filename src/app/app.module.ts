import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { DialogModule } from './dialog/dialog.module';
import { DialogRef } from './dialog/dialog-ref';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DialogModule
  ],
  providers: [DialogRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
