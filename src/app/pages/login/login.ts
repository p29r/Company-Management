import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../core/services/user';
import { Router } from '@angular/router';
import { UserLogin } from '../../core/models/class/user.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginFormObj: UserLogin = new UserLogin();

  userService = inject(User); // after 16 version
  router = inject(Router);
  signIn() {
    debugger;
    this.userService.onLogin(this.loginFormObj).subscribe({
      next: (response: any) => {
        debugger;
        const data = response.data.data;
        const strData = JSON.stringify(data);

        localStorage.setItem('clientStriveUser', strData);
        this.router.navigateByUrl('/client-list');
      },
      error: (error: any) => { debugger }
    })
  }
}
