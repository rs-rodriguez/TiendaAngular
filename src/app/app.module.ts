import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from "@angular/router";
import { DetalleProductoComponent } from './components/tienda/detalle-producto/detalle-producto.component';
import { MenubarComponent } from './components/menubar/menubar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'tienda/detalle-producto/:id', component: DetalleProductoComponent },
  { path: 'carrito', component: CarritoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarritoComponent,
    TiendaComponent,
    LoginComponent,
    DetalleProductoComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
