import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products_list:any
  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this._api.getTypeRequest('products','').subscribe((res: any) => {    
      this.products_list = res.data;
      console.log( this.products_list)
    });
  }

}
