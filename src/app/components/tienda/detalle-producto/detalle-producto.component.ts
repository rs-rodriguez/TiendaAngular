import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../../services/articulos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  articulo: any = {};

  constructor(private articles: ArticulosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.articulo = this.articles.getItem();
  }

  volver() {
  	this.articulo = {};
  	this.router.navigate(['/tienda']);
  }

}
