import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IClient } from '../models/client.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientGroupEnum } from '../models/client-group.enum';
import { DocumentTypeEnum } from '../models/document-type.enum';

@Component({
  selector: 'app-created-client',
  templateUrl: './created-client.component.html',
  styleUrls: ['./created-client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatedClientComponent implements OnInit {
  client: IClient;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { client } = window.history.state;
    this.client = client;
    if (!this.client) {
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }
}
