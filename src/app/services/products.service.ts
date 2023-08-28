import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateProduct, EditProduct, ParamsGetProducts } from './types';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  editProduct(data: EditProduct): Observable<any> {
    const url = `${environment.apiUrl}/product/editProduct`;
    return this.http.post(url, data);
  }

  deleteProduct(productId: string): Observable<any> {
    const url = `${environment.apiUrl}/product/delete/${productId}`;
    return this.http.delete(url);
  }

  createProduct(data: CreateProduct): Observable<any> {
    const url = `${environment.apiUrl}/product/createProduct`;
    return this.http.post(url, data);
  }

  getProducts(data: ParamsGetProducts): Observable<any> {
    const url = `${environment.apiUrl}/product/`;
    return this.http.post(url, data);
  }

  getProductById(productId: string): Observable < any > {
    const url = `${environment.apiUrl}/product/getProductById/${productId}`;
    return this.http.get(url);
  }

  getCategories(): Observable<any> {
    const url = `${environment.apiUrl}/product/getCategories`; // URL de la API
    return this.http.get(url);
  }
}
