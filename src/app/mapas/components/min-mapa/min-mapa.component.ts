import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-min-mapa',
  templateUrl: './min-mapa.component.html',
  styles: [`
    div{
      width: 100%;
      height: 150px;
      margin: 0;
    }
  `]
})
export class MinMapaComponent implements AfterViewInit {


  @Input() lngLat: [number, number] = [0,0];
  @ViewChild('mapa') divMapa!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
      var mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.lngLat,
      zoom: 15,
      interactive: false 
      
    });

    new mapboxgl.Marker()
    .setLngLat(this.lngLat)
    .addTo(mapa)
    
  }

}
