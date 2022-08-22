import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-form-address',
  templateUrl: './client-form-address.component.html',
  styleUrls: ['./client-form-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientFormAddressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
