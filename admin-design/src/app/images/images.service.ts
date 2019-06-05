import { Injectable } from '@angular/core';
import { Images } from './images';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  /*
   imagesList object of Images array*/
  public imageList: Images[] = [
    {
      id: 1,
      imageUrl: "assets/img-1.jpg",
      imageDescription: "image 1 description here "

    },
    {
      id:2,
      imageUrl: "assets/taj.jpg",
      imageDescription: "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage. "

    }
   
  ];

 // /** fetch entire array of Images */
  public getImages(): Images[] {
    return this.imageList;
  }
  //maxId is to find out last maximum id of image
  maxId: number;

 /**
  * Save image 
  * @param image object of the image class
  */
  public saveImage(image: Images) {
   /*if image is added then id will be undefine and then assign id=maxId+1*/
    if (image.id === undefined) {
      /*if length is zero then assign maxId=1*/
      if (this.imageList.length == 0) {
        this.maxId = 1;
        image.id = this.maxId;
        this.imageList.push(image);
        console.log("assign id=", image.id);
      }
      else {
        this.maxId = this.imageList.reduce(function (i1, i2) { return (i1 > i2) ? i1 : i2 }).id;
        image.id = this.maxId + 1;
        console.log("assign id=", image.id);
        this.imageList.push(image);
      }
      
    }

    else
    {
      const index = this.imageList.findIndex(i => i.id == image.id);
      this.imageList[index] = image;
    }
   
  }

  public getImage(id: number) {
    const index = this.imageList.findIndex(i => i.id == id);
    return this.imageList[index];
  }

  /**
   * delete image
   * @param id of selected image
   */
  deleteImage(id: number) {
    const index = this.imageList.findIndex(i => i.id === id);
    this.imageList.splice(index, 1);
    return index;

  }


  /**fetch image URL and description of index to disply it in slider
   * 
   * @param n is array index of image that will be shown in slider
   */
  public getFetchedImage(n: number) {
    return this.imageList[n];
  }

  /** length of imageList array*/
  public getLength() {
    return this.imageList.length;
  }

}
