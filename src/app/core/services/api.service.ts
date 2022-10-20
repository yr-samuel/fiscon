import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoreModule } from '../core.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: CoreModule,
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });

  private BASE_URL = environment.API_URL;

  get<T>(endpoint: string) {
    return this.httpClient.get<T>(this.BASE_URL + endpoint, {
      headers: this.headers,
    });
  }

  post<T>(endpoint: string, data: any) {
    return this.httpClient.post<T>(this.BASE_URL + endpoint, data, {
      headers: this.headers,
    });
  }

  put<T>(endpoint: string, data: Record<string, unknown>) {
    return this.httpClient.put<T>(this.BASE_URL + endpoint, data, {
      headers: this.headers,
    });
  }

  delete<T>(endpoint: string) {
    return this.httpClient.delete<T>(this.BASE_URL + endpoint, {
      headers: this.headers,
    });
  }
}
