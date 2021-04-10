import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { DirectiveComponent } from './directive/directive.component';
import { EmployeesComponent } from './employees/employees.component';
import { FilterPipe } from './employees/filter.pipe';
import { ProductsComponent } from './products/products.component';
import { SidebarProductComponent } from './products/sidebar-product/sidebar-product.component';
import { ProductComponent } from './test1/product.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    DirectiveComponent,
    EmployeesComponent,
    FilterPipe,
    ProductsComponent,
    SidebarProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
