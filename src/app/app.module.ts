import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './Empleados/Empleados.component';
import { Empleado1Component } from './empleado1/empleado1.component';

@NgModule({
  declarations: [			
    AppComponent, EmpleadosComponent,
      Empleado1Component
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
