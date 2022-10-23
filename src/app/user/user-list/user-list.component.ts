import {Component, OnInit, TemplateRef} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  user: User;
  modalRef: BsModalRef;

  constructor(private userService : UserService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getUsers()
  }
  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  public onDeleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      (response: void) => {
        console.log(response);
        window.location.reload()
      },
      (error: HttpErrorResponse) => {
        alert(error.message);

      }
    );
  }
  public searchUsers(key: string): void {
    console.log(key);
    const results: User[] = [];
    for (const employee of this.users) {
      if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.users = results;
    if (results.length === 0 || !key) {
      this.getUsers();
    }
  }
  public getUserById(userId : number): void {
    this.userService.getUserById(userId).subscribe(
      (response: User) => {
        this.user = response;
        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
