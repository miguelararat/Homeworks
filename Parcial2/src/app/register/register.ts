import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../auth';
import { RouterLink, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  protected readonly auth = inject(Auth);
  private router = inject(Router);

  email = '';
  password = '';

  async registrar(){
    const ok = await this.auth.Register(this.email, this.password)
    if(ok){
      this.router.navigate(['/explorador']);
    }
  }
}