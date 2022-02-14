import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  enable:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClickTerms(){
    this.enable = !this.enable;
  }
  proceed(){
    this.router.navigate(["/question"]);
  }

}
