import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParfumeService } from '@app/_services';
import { first } from 'rxjs';

@Component({
  selector: 'app-first-list',
  templateUrl: './first-list.component.html',
  styleUrls: ['./first-list.component.css']
})
export class FirstListComponent implements OnInit{

  parfumes?:any[];
  profile?:any;

  constructor(private parfumeService: ParfumeService,private router: Router){}
  
  ngOnInit(): void {
   
    this.getAllParfumes();
  }
  
  getAllParfumes(){
    this.parfumeService.getAll()
    .pipe(first())
    .subscribe(parfume => this.parfumes = parfume);
  }

  showProfile(id: string){


    this.router.navigate(['Parfume/Parfumes/perfumeProfile', id]);
    // this.parfumeService.getById(id)
    // .pipe(first())
    // .subscribe(parfume => this.profile = parfume);
  }

}
