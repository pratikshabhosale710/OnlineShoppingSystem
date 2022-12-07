import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProduct } from '../component/add-product';
import { DeleteProduct } from '../delete-product';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductService {

  baseUrl="http://localhost:3000/products"
  constructor(private httpClient:HttpClient) { }

  delete(productId:DeleteProduct):Observable<object>{
    console.log(productId);
    return this.httpClient.delete(`${this.baseUrl}`);

  }
 
}
