import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10';
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
