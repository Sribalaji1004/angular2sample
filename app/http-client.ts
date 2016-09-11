import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpClient {

  constructor(private http: Http) {
    this.http = http;
  }

  private createAuthorizationHeader(headers:Headers) {

    headers.append('Authorization', 'Beare ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiIwNjJiZmJjZS1kMDQ1LTRiYTYtYmY1Yi1lMzk2NjExOThiNDQiLCJ1bmlxdWVfbmFtZSI6InNlbnRoaWxAcHdyZGJ5LmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vYWNjZXNzY29udHJvbHNlcnZpY2UvMjAxMC8wNy9jbGFpbXMvaWRlbnRpdHlwcm92aWRlciI6IkFTUC5ORVQgSWRlbnRpdHkiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6Ijg2MmE3ZWY4LWYwZmQtNDVlYS04YTdhLTcyZTc3ZGJlNjM0ZCIsImlzcyI6Imh0dHA6Ly9kZXZjbW5oLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiMzEyNjJhMDMyMTIzNDhlMzhmMTJjMGJhOTY1NTY2NWMiLCJleHAiOjE0Nzg1MjIxNDIsIm5iZiI6MTQ2Mjk3MDE0Mn0.1pYg0JVphqGUw8X10xM0LOgQJPNPG9h2ocxcf0jPfF8');

  }

  get(url) {

    let headers = new Headers();

    this.createAuthorizationHeader(headers);

    return this.http.get(url, {
      headers: headers
    });

  }

  post(url, data) {

    let headers = new Headers();

    this.createAuthorizationHeader(headers);

    return this.http.post(url, data, {
      headers: headers
    });
  }
}