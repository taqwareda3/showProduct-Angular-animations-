import { animate, state, style, transition, trigger } from '@angular/animations';
import { DatePipe, formatDate } from '@angular/common'
import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { Products } from 'src/app/models/products';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css'],
 
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(2000)]),
      transition(':leave', animate(600, style({ opacity: 0 })))
    ])
  ]
})
export class ShowProductsComponent implements OnInit {
  products: Products[] = []
  cateories: Categories[] = []
  today: any = new Date();
  
  expired: string | undefined
 
 

  constructor(private getService: GetDataService) { }

  ngOnInit(): void {
    this.getAllCategories()
    this.getAllProducts()
    }

  // getAllCategories
  getAllCategories() {
    this.getService.getAllCategories().subscribe(
      res => {
        this.cateories = res
        console.log(this.cateories)
      }
    )
  }
  // =======================================================
  // getAllProducts
  getAllProducts() {
    this.getService.getAllProducts().subscribe(
      res => {
        this.products = res
        // let d = formatDate(this.today,'dd-MM-yyyy', 'en-US')
        // console.log(this.today,typeof(d),d)
        // this.products.map(
        //   product=>{
        //     console.log(typeof(product.date),product.date)
        //     if(product.date===d){
        //       console.log( "not expired",product.id)
        //        this.expired= "not expired"
        //     }else{
        //       console.log("expired",product.id)
        //       this.expired=" expired"
              
        //     }
        //   }
        // )

          
      }
    )
    // let d= this.today.toLowerCase
    // this.products.filter(i=>i.date!=d)
    //  console.log(this.products,d)
    //  this.expired=true
  }
  // ========================================
  // fillterData
  fillterData(id: any) {
    this.getService.getAllProducts().subscribe(
      res => {
        this.products = res
        this.products = this.products.filter(i => i.catId == id)
      })
  }

}
 




