import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  nums: number[] = [];
  users: {name: string; lastname: string} [] = [];

  constructor() {


  }

  ngOnInit(): void {
    const totalNums = 15;
    for(let i=0; i < totalNums; i++){
      this.nums.push(i);
    }
  }

}
