import { Component } from '@angular/core';
import { Packs } from 'src/app/models/Packs';
import { PackService } from 'src/app/services/pack.service';

@Component({
  selector: 'app-pack-admin',
  templateUrl: './pack-admin.component.html',
  styleUrls: ['./pack-admin.component.css']
})
export class PackAdminComponent {
  pack!: Packs[];


  constructor(private _service: PackService) { }


  ngOnInit(): void {
    this._service.getPacksClient().subscribe(res => this.pack = res);
  }
}
