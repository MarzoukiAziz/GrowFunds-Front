import { Component } from '@angular/core';
import { Packs } from 'src/app/models/Packs';
import { PacksService } from 'src/app/services/packs.service';

@Component({
  selector: 'app-packs-visitor',
  templateUrl: './packs-visitor.component.html',
  styleUrls: ['./packs-visitor.component.css']
})
export class PacksVisitorComponent {
  packs!: Packs[];
  constructor(private _service: PacksService) { }


  ngOnInit(): void {
    this._service.getAllPackssVisitor().subscribe(res => {
      this.packs = res;
    });

  }
}
