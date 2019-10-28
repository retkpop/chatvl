import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '@app/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private credentialsService: CredentialsService) {}

  ngOnInit() {}
}
