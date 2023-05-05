import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit{

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  //roles!: string[];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService , private router :Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        // Vérifier si l'utilisateur actuel a l'ID 5 avant de le rediriger
        const user = this.tokenStorage.getUser();
        if (user && user.id === 5 || user && user.id === 71) {
          this.router.navigateByUrl('/admin').then(() => {
            window.location.reload();
          });

        } else {
          // Si l'utilisateur n'a pas l'ID 71, le déconnecter et afficher un message d'erreur
          this.tokenStorage.signOut();
          this.errorMessage = 'Vous n\'êtes pas autorisé à vous connecter.';
          this.isLoginFailed = true;
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
