import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatComponentModule } from './component/mat-component/mat-component.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatComponentModule,
    HttpClientModule,
    RouterModule.forChild([])
  ],
  declarations: [],
  exports: [
    MatComponentModule
  ],
  providers: []
})
export class SharedModule { }
