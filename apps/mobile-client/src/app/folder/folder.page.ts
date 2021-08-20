import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'food-delivery-workspace-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {
  public folder: string | null;

  constructor(private activatedRoute: ActivatedRoute) {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
