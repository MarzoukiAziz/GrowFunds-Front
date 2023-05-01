import { Component } from '@angular/core';
import { Packs } from 'src/app/models/Packs';
import { PackService } from 'src/app/services/pack.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pack-add',
  templateUrl: './pack-add.component.html',
  styleUrls: ['./pack-add.component.css']
})
export class PackAddComponent {

 p: Packs = new Packs();
  constructor(private router: Router, private _service: PackService) {
  }

  ngOnInit(): void {}

  addpack() {
    this._service.addpack(this.p).subscribe(
      res => this.router.navigate(['/admin/pack']).then(() => {
        window.location.reload();
      }));
  }
}
