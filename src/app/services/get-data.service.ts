import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }
  // getAllProducts
  getAllProducts() {
    return this.http.get<any>(`${environment.APIURL}/products`).pipe(
      map(res => {
        return res
      })
    )
  }
  // getAllCategories
  getAllCategories() {
    return this.http.get<any>(`${environment.APIURL}/categories`).pipe(
      map(res => {
        return res
      })
    )
  }

}
