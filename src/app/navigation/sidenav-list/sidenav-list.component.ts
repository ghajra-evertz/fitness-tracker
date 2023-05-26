import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy{

  @Output() closeSidenav = new EventEmitter();

  constructor(private authService: AuthService){}

  isAuth:boolean = false;
  authSubscription: Subscription | undefined;

  ngOnInit(){
    this.authSubscription = this.authService.authchange.subscribe(authStatus => {
      this.isAuth = authStatus;
    })
  }

  ngOnDestroy(){
    this.authSubscription?.unsubscribe();
  }

  onToggleSidenav(){
    this.closeSidenav.emit();
  }

  onLogout(){
    this.onToggleSidenav();
    this.authService.logout();
  }

}
