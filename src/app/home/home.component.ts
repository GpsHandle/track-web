import { Component, OnInit } from '@angular/core';
import { RootFacade } from '@app/@stores/root.facade';
import { UntilDestroy } from '@ngneat/until-destroy';
import { MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';

// import {
//   Icon, Map, LatLngBounds, Marker, DivIcon, Popup,
//   icon, markerClusterGroup, map as lmap,
//   latLng, control, tileLayer, marker, point,
//   divIcon, popup, circleMarker, MarkerClusterGroup
// } from 'leaflet';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { Device, Position } from '@app/@api/models';
import { UtilsService } from '@core/utils.service';
import { forEach } from 'lodash-es';


@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  deviceList$ = this.facade.deviceList$;
  positionList$ = this.facade.positionList$;
  pitch = 50;
  bearing = -97;

  customDefault: L.Icon;
  map: L.Map;
  markersCluster: L.MarkerClusterGroup;

  TILE_OSM = 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
  TILE_MAPBOX = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidnViYWtuaW5oIiwiYSI6ImNrbWdtZzV0aDBuMTQycHBram55dzRpaDkifQ.K3a592tY4scj0j_wziPHeA';

  constructor(private facade: RootFacade, private media: MediaObserver, private router: Router, private utilsService: UtilsService) {}

  ngOnInit() {
    this.media.asObservable().subscribe(() => {
      if (this.isMobile) {
        this.router.navigate(['/m-live']);
      }
    });

    this.facade.loadAllDevice();
    this.isLoading = true;
    this.markersCluster = L.markerClusterGroup({});
    this.positionList$.subscribe(positionList => {
      forEach(positionList, p => {
        const marker = this.buildMarker(p);
        this.markersCluster.addLayer(marker);
      })

      this.getMap().addLayer(this.markersCluster);
    })
  }

  get isMobile(): boolean {
    return this.media.isActive('xs') || this.media.isActive('sm');
  }
  getMap(): L.Map {
    const mapboxTiles = L.tileLayer(this.TILE_MAPBOX, {});
    if (!this.map) {
      this.map = L.map('map1')
        .addLayer(mapboxTiles)
        .setView([42.3610, -71.0587], 15);;
    }

    return this.map;
  }

  buildMarker(p: Position): L.Marker {
    const ll = L.latLng(p.latitude, p.longitude);
    const icon = this.buildIcon(p);
    const popup = this.buildPopup(p);
    const devName = p.deviceId;
    const m = L.marker(ll, {icon})
      .bindTooltip('devName', {
        permanent: true,
        direction: 'bottom',
        offset: L.point(0, 6),
        opacity: 1,
        className: 'marker-label'
      }).bindPopup(popup);
    return m;
  }
  buildIcon(p: Position): L.DivIcon {
    let htmlIcon = '';
    htmlIcon = '<div style="background-color:green' + '; width: 100%; height: 100%;"></div>';
    // html?: string | false;
    // bgPos?: PointExpression;
    // iconSize?: PointExpression;
    // iconAnchor?: PointExpression;
    // popupAnchor?: PointExpression;
    // className?: string;
    return L.divIcon({
      html: htmlIcon
    });
  }
  buildPopup(p: Position): L.Popup {
    if (this.utilsService.isPlatformBrowser()) {
      const xpopup = L.popup();
      xpopup.setContent(document.createElement('div'));
      xpopup.options.offset = L.point(0, 0);
      return xpopup;
    }
  }

  select($event: MouseEvent, device: Device) {

  }
}
