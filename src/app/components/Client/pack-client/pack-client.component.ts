import { Component } from '@angular/core';
import { Packs } from 'src/app/models/Packs';
import { Product } from 'src/app/models/Product';
import { PackService } from 'src/app/services/pack.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-pack-client',
  templateUrl: './pack-client.component.html',
  styleUrls: ['./pack-client.component.css']
})
export class PackClientComponent {
  pack!: Packs[];
  data: number = 0;
  likesCount: number[] = [];
  likesClicked: boolean[] = [];

  constructor(private _service: PackService) { }


  ngOnInit(): void {
    this._service.getPacksClient().subscribe(res => {
      this.pack = res
      this.pack.forEach((p, i) => {
        this._service.getlikes(p.idPack).subscribe(res => {
          this.likesCount[i] = res;
          console.log(this.likesCount[i] )
        });
      }); });
      
  }
  
  
  like(i: number) {
    if (!this.likesClicked[i]) {
      this.likesClicked[i] = true;
      this.likesCount[i]++;
    } else {
      this.likesClicked[i] = false;
      this.likesCount[i]--;
    }
  }

  addlike(id: number) {
    console.log("aaa")
    this._service.addlike(id);
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
