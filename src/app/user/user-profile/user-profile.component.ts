import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private route : ActivatedRoute, private userService : UserService) { }

  userId : number
  user : User

  ngOnInit(): void {
    this.userId = this.route.snapshot.params["id"]
    this.userService.getUserById(this.userId).subscribe(data => {

      this.user = data;
    }, error =>console.log(error));
  }
}
