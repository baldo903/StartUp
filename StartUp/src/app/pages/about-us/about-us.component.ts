import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent implements OnInit {
  default: string = 'upoy';
  selected: string | undefined;
  imgPath: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.selected = this.default;
    this.imgPath = "../../../assets/images/"+this.selected+".jpg";
  }

  showDetails(param: string): void {
    console.log(param);
    this.selected = param;
    this.imgPath = "../../../assets/images/"+this.selected+".jpg";
  }
}
