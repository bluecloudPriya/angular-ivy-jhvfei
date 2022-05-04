import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './api.service';
//import { AngularMaterialModule } from './ angular-material.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    // AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [ApiService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
