import { Injectable } from '@angular/core';
import { Images } from './images';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  public imageList: Images[] = [
    {
      imageUrl: "assets/img-1.jpg",
      imageDescription: "image 1 description here "

    },
    {
      imageUrl: "assets/img-2.jpg",
      imageDescription: "image 2 description here"

    },
    {
      imageUrl: "assets/admin.png",
      imageDescription: "image 3 description here"

    }


  ];

  public getImages(): Images[] {
    return this.imageList;
  }


  imageIndex: number = -1;


  getImageDetails(image: string) {
    this.imageIndex = this.imageList.findIndex(i => i.imageUrl == image);
    return this.imageList[this.imageIndex];
  }


  public saveImage(image: Images) {
    console.log(this.imageIndex);
    if (this.imageIndex != -1) {
      this.imageList[this.imageIndex] = image;
    }
    else {
      this.imageList.push(image);
    }
  }


  public deleteImage(image: string) {
    const index = this.imageList.findIndex(i => i.imageUrl == image);

    this.imageList.splice(index, 1);

    return index;

  }

  public getFetchedImage(n: number) {
    return this.imageList[n];
  }

  public getLength() {
    return this.imageList.length;
  }

  constructor() { }
}
