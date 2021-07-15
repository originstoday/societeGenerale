import { Component, OnInit } from '@angular/core';
import { first} from 'rxjs/operators';

import { CustomerService } from '../_services';
import { Customer } from '../_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    customers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getAll()
        .subscribe((customers: any) => this.customers = customers);
    }

    deleteUser(id: string) {
        const orderId = this.customers.find(x => x.id === id);
        if (!orderId) return;
        this.customerService.delete(id)
            .subscribe(() => this.customers = this.customers.filter(x => x.id !== id));
    }
}