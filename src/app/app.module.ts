import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

import { TodoService } from './todo.service.ts';
import { MessageHeaderComponent } from './message-header/message-header.component';
import { MDLUpgradeElementDirective } from './mdl-upgrade-element.ts';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    MessageHeaderComponent,
    MDLUpgradeElementDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide:'todoService',useClass:TodoService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
