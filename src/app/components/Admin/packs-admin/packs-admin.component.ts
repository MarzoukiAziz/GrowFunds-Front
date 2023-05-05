import { Component } from '@angular/core';
import { Packs } from 'src/app/models/Packs';
import { PacksService } from 'src/app/services/packs.service';

@Component({
  selector: 'app-packs-admin',
  templateUrl: './packs-admin.component.html',
  styleUrls: ['./packs-admin.component.css']
})
export class PacksAdminComponent {
  packs!: Packs[];
  constructor(private _service: PacksService) { }


  ngOnInit(): void {
    this._service.getAllPackssAdmin().subscribe(res => {
      this.packs = res;
    });

  }
}
