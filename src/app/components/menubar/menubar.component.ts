import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private articles: ArticulosService) { }

  ngOnInit() {
  }

  getShouCounter() {
   return this.articles.getCantidad();
  }

  logout() {
    sessionStorage.removeItem('LOGIN');
    this.router.navigate(['/']);
  }

}
