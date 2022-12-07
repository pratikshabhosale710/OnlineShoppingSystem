import { Component, OnInit } from '@angular/core';
import { AddProductService } from 'src/app/service/add-product.service';
import { AddProduct } from '../add-product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:AddProduct=new AddProduct();

  constructor(private addProductService:AddProductService) { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.product);
    this.addProductService.add(this.product).subscribe(data=>
      {
      alert("Successfully Added Product!!!")
      },error=>alert("Sorry Something is wrong!!!"));
  }

}
