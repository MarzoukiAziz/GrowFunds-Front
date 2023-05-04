import { Component } from '@angular/core';
import { Packs } from 'src/app/models/Packs';
import { PacksService } from 'src/app/services/packs.service';

@Component({
  selector: 'app-packs-client',
  templateUrl: './packs-client.component.html',
  styleUrls: ['./packs-client.component.css']
})
export class PacksClientComponent {
  packs!: Packs[];
  recommanded :Packs[]=[];
  constructor(private _service: PacksService) { }


  ngOnInit(): void {
    this._service.getAllPackssClient().subscribe(res => {
      this.packs = res;
      this.packs.sort((a: Packs, b: Packs) => b.likedByUsers.length - a.likedByUsers.length);
        const p = this.packs.shift()
        console.log(p)
        if(p!= undefined)this.recommanded.push(p);   
        console.log(this.recommanded)   
    });
  }
}
