import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  clients: Client[] = [
    new Client('John', 'Example client', 'john@doe.com'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
