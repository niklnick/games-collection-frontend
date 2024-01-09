import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AuthModel } from 'src/shared/models/auth.model';
import { LoginModel } from 'src/shared/models/login.model';
import { SignupModel } from 'src/shared/models/signup.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly BASE_URL: string = environment.apiUrl + '/auth';

  constructor(private readonly httpClient: HttpClient) { }

  signup(signup: SignupModel): Observable<AuthModel> {
    return this.httpClient.post<AuthModel>(this.BASE_URL + '/signup', signup);
  }

  login(login: LoginModel): Observable<AuthModel> {
    return this.httpClient.post<AuthModel>(this.BASE_URL + '/login', login);
  }
}
