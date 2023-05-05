import { Transactions } from 'src/app/models/Transactions';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transaction-details-admin',
  templateUrl: './transaction-details-admin.component.html',
  styleUrls: ['./transaction-details-admin.component.css']
})
export class TransactionDetailsAdminComponent {
  idTrans!: number;
  transaction!: Transactions;
  cr: Transactions = new Transactions();
  constructor(private router: Router,private service: TransactionsService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.idTrans = this.route.snapshot.params['id'];
    this.service.getTransactionDetailsForAdmin(this.idTrans).subscribe(res => {
      this.transaction = res;
    });

  }
  
  deleteTransaction() {
    this.service.deleteTransaction(this.transaction).subscribe(
      res => this.router.navigate(['/admin/transactions/']).then(() => {
        window.location.reload();
      }));
  }

}
