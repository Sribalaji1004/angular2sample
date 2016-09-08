import { Injectable } from '@angular/core';
import { TopPartners } from './top-partners';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class TopPartnersService {

constructor(private http:Http) {
    
    
}

private serviceBase = 'https://devcmnh.azurewebsites.net/odata/getTopPartnerList';    //QA

    

    getTopPartners():Observable<TopPartners[]>{

    let headers = new Headers({ 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiIwNjJiZmJjZS1kMDQ1LTRiYTYtYmY1Yi1lMzk2NjExOThiNDQiLCJ1bmlxdWVfbmFtZSI6InNlbnRoaWxAcHdyZGJ5LmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vYWNjZXNzY29udHJvbHNlcnZpY2UvMjAxMC8wNy9jbGFpbXMvaWRlbnRpdHlwcm92aWRlciI6IkFTUC5ORVQgSWRlbnRpdHkiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6Ijg2MmE3ZWY4LWYwZmQtNDVlYS04YTdhLTcyZTc3ZGJlNjM0ZCIsImlzcyI6Imh0dHA6Ly9kZXZjbW5oLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiMzEyNjJhMDMyMTIzNDhlMzhmMTJjMGJhOTY1NTY2NWMiLCJleHAiOjE0Nzg1MjIxNDIsIm5iZiI6MTQ2Mjk3MDE0Mn0.1pYg0JVphqGUw8X10xM0LOgQJPNPG9h2ocxcf0jPfF8' });
    let options = new RequestOptions({ headers: headers });
console.log(options);

        return this.http.get(this.serviceBase, options)
                        .map(res => res.json().value)
                        .catch((err : any) => { 
                            console.log(err);
                            
                            
                            //return Observable.of(undefined);
                            return Observable.throw(new Error(err.status));
                         });
                    
    }

private handleError(error:any){

}

}



//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiIwNjJiZmJjZS1kMDQ1LTRiYTYtYmY1Yi1lMzk2NjExOThiNDQiLCJ1bmlxdWVfbmFtZSI6InNlbnRoaWxAcHdyZGJ5LmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vYWNjZXNzY29udHJvbHNlcnZpY2UvMjAxMC8wNy9jbGFpbXMvaWRlbnRpdHlwcm92aWRlciI6IkFTUC5ORVQgSWRlbnRpdHkiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6Ijg2MmE3ZWY4LWYwZmQtNDVlYS04YTdhLTcyZTc3ZGJlNjM0ZCIsImlzcyI6Imh0dHA6Ly9kZXZjbW5oLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiMzEyNjJhMDMyMTIzNDhlMzhmMTJjMGJhOTY1NTY2NWMiLCJleHAiOjE0Nzg1MjIxNDIsIm5iZiI6MTQ2Mjk3MDE0Mn0.1pYg0JVphqGUw8X10xM0LOgQJPNPG9h2ocxcf0jPfF8