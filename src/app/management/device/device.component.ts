import { Component, OnInit } from '@angular/core';
import { RootFacade } from '@app/@stores/root.facade';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  deviceList$ = this.facade.deviceList$;
  displayedColumns = [
    'id',
    'groupId',
    'uniqueId',
    'name',
    'model',
    'phone',
    'status',
    'positionId',
    'lastUpdate',
    'disabled',
    'geofenceIds',
    'category',
    'attributes',
    'contact',
    'actions',
  ];

  constructor(private facade: RootFacade) {}

  ngOnInit(): void {
    this.facade.loadAllDevice();
  }
}
