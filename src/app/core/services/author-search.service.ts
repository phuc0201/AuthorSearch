
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private baseUrl = 'https://openlibrary.org';
  private searchString: string = '';
  constructor(private http: HttpClient) {}

  setSearchString(searchString: string) {
    localStorage.setItem('searchString', searchString);
  }

  getSearchString(): string {
    return localStorage.getItem('searchString') || ''
  }
  searchAuthors(query: string, limit: number, offset: number): Observable<any> {
    const url = `${this.baseUrl}/search/authors.json?q=${query}&limit=${limit}&offset=${offset}`;
    return this.http.get(url);
  }
  searchAuthorDetail(key: string): Observable<any>{
    const url = `${this.baseUrl}/authors/${key}.json`;
    return this.http.get(url)
  }
  searchAuthorPhoto(key: string): string{
    return `https://covers.openlibrary.org/a/olid/${key}-L.jpg`;
  }
  searchAuthorWorks(key: string, limit: number, offset: number, link: string): Observable<any>{
    let url = `${this.baseUrl}${link}`;
    if(link === ''){
      url = `${this.baseUrl}/authors/${key}/works.json?limit=${limit}&offset=${offset}`;
    }
    
    return this.http.get(url)
  }
}