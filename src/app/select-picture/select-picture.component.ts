import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-select-picture',
  templateUrl: './select-picture.component.html',
  styleUrls: ['./select-picture.component.scss']
})
export class SelectPictureComponent implements OnInit {

  allPictures = ['girl_pink.png', 'girl.png', 'man_v.png', 'man.png', 'music.png', 'ninja.png', 'people.png', 'punk.png', 'woman_bl.png', 'woman.png'];

  constructor(public dialogRef: MatDialogRef<SelectPictureComponent>) { }

  ngOnInit(): void {
  }

}
