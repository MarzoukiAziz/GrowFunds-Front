import { Component } from '@angular/core';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';
import { catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-currency-converter-client',
  templateUrl: './currency-converter-client.component.html',
  styleUrls: ['./currency-converter-client.component.css']
})
export class CurrencyConverterClientComponent {
  amount!: number;
  fromCurrency!: string;
  toCurrency!: string;
  result: number=0;

  constructor(private currencyConverterService: CurrencyConverterService ) {}

  convert() {
    console.log("aaaaaaaaaaaa")
    this.currencyConverterService.convertCurrency(this.amount, this.fromCurrency, this.toCurrency).subscribe(
     (data)=>{
      console.log(data)
      this.result=data
     }
    )
   
}

}
