import { Component, OnInit } from '@angular/core';
import { DeleteProduct } from 'src/app/delete-product';
import { DeleteProductService } from 'src/app/service/delete-product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  product:DeleteProduct=new DeleteProduct();

  constructor(private deleteProductService:DeleteProductService) { }

  ngOnInit(): void {
  }

  deleteProduct(){
    console.log(this.product);
    this.deleteProductService.delete(this.product).subscribe(data=>
      {
      alert("Successfully Deleted Product!!!")
      },error=>alert("Sorry Something is wrong!!!"));
  }

}
