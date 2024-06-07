import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!:string;

  @Input()
  public alt:string = '';

  ngOnInit(): void {
    if(!this.url) throw new Error('Metod not implemented');
  }

  public hasLoadded:boolean = false;

  onLoad(){

    //DURACION DE UN SEGUNDO PARA CARGAR LA IMAGEN
    // setTimeout(()=>{
    //   this.hasLoadded=true
    // },1000);


    this.hasLoadded=true
  }

 }


