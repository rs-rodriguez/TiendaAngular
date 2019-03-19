import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { Articulo } from '../../models/Articulo.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  private articuloFilter: any = {nombre: ''};
  private allArticle: Articulo[];
  private articulos: ArticulosService;
  private cantidadAdd: number;

  constructor(private articles: ArticulosService, private router: Router, private route: ActivatedRoute) {
    this.articulos = articles;
   }

  ngOnInit() {
    let login = sessionStorage.getItem('LOGIN');
    if (login !== 'OK') {
      sessionStorage.removeItem('LOGIN');
      this.router.navigate(['/']);
    }
    this.articulos.getAllArticulo().subscribe(
      artics => this.allArticle = artics,
      error1 => {},
      () => this.articulos.setArticulos(this.allArticle)
    );
  }

  showMore(articulo: Articulo) {
    this.articulos.setItem(articulo);
    this.router.navigate(['tienda/detalle-producto/:id']);
  }

  addCanasta(articuloSel, formsCar) {
    debugger;
    if (articuloSel.cantidad !==undefined) {
      this.articulos.setItem(articuloSel);
      this.articulos.agregarItemShoping(articuloSel.cantidad);
    }
  }
}
