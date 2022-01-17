import {Component} from "@angular/core";
import {ProductData} from "../data/ProductData";

@Component({
  selector:"list-product",
  templateUrl:"listproduct.component.html",
})

export class ListproductComponent{
  products:ProductData[]=[
    {
      name:"san pham 1",
      image:"deno.png",
      price:1000
    },
    {
      name:"san pham 2",
      image:"deno.png",
      price:2000
    }];

}
