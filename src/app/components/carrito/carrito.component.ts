import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../services/articulos.service';
import {log} from 'util';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carItems: any[] = [];
  total = 0;
  loading = false;
  error: string;

  constructor(private articles: ArticulosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let login = sessionStorage.getItem('LOGIN');
    if (login !== 'OK') {
      sessionStorage.removeItem('LOGIN');
      this.router.navigate(['/']);
    }
  	this.carItems = this.articles.getCarShoping();
  	for (var i = 0; i < this.carItems.length; i++) {
  		this.total += this.carItems[i].item.precio*this.carItems[i].cantidad;
  	}
  }

  pagar() {
    this.loading = true;
    let itemsUp = this.articles.getArticulos();
    this.articles.postDatos(itemsUp).subscribe(
      data => {
        if(data['updateMsg'] === 'Ok') {
          this.articles.setCarShoping();
          this.router.navigate(['/tienda']);
        } else {
            this.error = data['updateMsg'];
        }
        this.loading = false;
      }, error => {
        console.log(error);
        this.loading = false;
      }
    );
    this.total = 0;
    this.articles.setCantidad(0);
  }

  vaciarCarrito() {

  }

}
