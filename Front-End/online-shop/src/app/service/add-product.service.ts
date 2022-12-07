import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProduct } from '../component/add-product';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  baseUrl="http://localhost:3000/products"
  constructor(private httpClient:HttpClient) { }

  add(product:AddProduct):Observable<object>{
    console.log(product);
    return this.httpClient.post(`${this.baseUrl}`,product);

  }
}
