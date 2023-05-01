import { Component } from '@angular/core';
import { Packs } from 'src/app/models/Packs';
import { PackService } from 'src/app/services/pack.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pack-details-client',
  templateUrl: './pack-details-client.component.html',
  styleUrls: ['./pack-details-client.component.css']
})
export class PackDetailsClientComponent {
  
  
  packid!: number;
  pack!: Packs;
  constructor(private _service: PackService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.packid = this.route.snapshot.params['id'];
    this._service.getPackDetailsForAdmin(this.packid).subscribe(res => {
      this.pack = res;
    });
  }
  getRandomImage(typepack: string) {
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'

    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}
}
