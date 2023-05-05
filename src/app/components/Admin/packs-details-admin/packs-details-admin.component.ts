import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Packs } from 'src/app/models/Packs';
import { PacksService } from 'src/app/services/packs.service';

@Component({
  selector: 'app-packs-details-admin',
  templateUrl: './packs-details-admin.component.html',
  styleUrls: ['./packs-details-admin.component.css']
})
export class PacksDetailsAdminComponent {
  pid!: number;
  pack!: Packs;
  constructor(private router: Router, private _service: PacksService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.pid = this.route.snapshot.params['id'];
    this._service.getPacksByIdAdmin(this.pid).subscribe(res => {
      this.pack = res;
    });
  }

  deletePack() {
    this._service.deletPacks(this.pid).subscribe(
      res => this.router.navigate(['/admin/packs']).then(() => {
        //window.location.reload();
      }));
  }



}
