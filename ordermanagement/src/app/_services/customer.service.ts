import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Customer } from '../_models';

const baseUrl = `${environment.apiUrl}/customers`;

@Injectable({ providedIn: 'root' })
export class CustomerService {
    constructor(private http: HttpClient) { }

    getAll() { 
        return this.http.get<Customer[]>(baseUrl);
    }

    getById(id: string) {
        return this.http.get<Customer>(`${baseUrl}/${id}`);
    }

    create(params: any) {
        var createUrl = baseUrl + '/addUser'
        return this.http.post(createUrl, params);
    }

    update(id: string, params: any) {
        return this.http.put(`${baseUrl}/${id}`, params);
    }

    delete(id: string) {
        return this.http.delete(`${baseUrl}/${id}`);
    }

    filter(id: string) {
        var filterUrl = baseUrl + '/addUser'
        return this.http.get(filterUrl + '/filter');
    }
}