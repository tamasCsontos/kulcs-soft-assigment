import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';



const headers_object = new HttpHeaders();
headers_object.append('Content-Type', 'application/json');
headers_object.append('Authorization', 'Basic ' + btoa('admin:admin'));



@Injectable({
  providedIn: 'root'
})

export class UserService {

  private isAuth  = false;


  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient, private router: Router) { }


  getUser(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`, { headers: headers_object});
  }

  createUser(user: Object): Observable<Object> {
    console.log('sdadsadsadsa');
    return this.http.post(`${this.baseUrl}` + `/create`, user, { headers: headers_object});
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value, { headers: headers_object});
  }

  deleteUser(id: number): Observable<any> {
    console.log('sdadsadsadsa');

    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' , headers: headers_object});
  }

  getUsersList(): Observable<any> {
    console.log('sdadsadsadsa');
    return this.http.get(`${this.baseUrl}`, { headers: headers_object});
  }



  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text', headers: headers_object});
  }


  signinUser(name: string, password: string) {
    const headers_object_2 = new HttpHeaders();
    headers_object_2.append('Content-Type', 'application/json');
    headers_object_2.append('Authorization', 'Basic ' + btoa(`${name}` + ':' + `${password}`));
    this.http.get(`${this.baseUrl}`, { headers: headers_object_2, observe: 'response'})
      .subscribe(response => {

      // You can access status:
      console.log(response.status);

      if  (response.status === 200) {
          this.isAuth = true;
          console.log(this.isAuth);
        this.router.navigate(['users']);
      }

    });
  }

  isAuthenticated() {
    return this.isAuth;
  }

}
