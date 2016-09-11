"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Response } from '@angular/http';
var http_client_1 = require('../http-client');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var TopPartnersService = (function () {
    //constructor(private http:Http) {
    function TopPartnersService(http) {
        this.http = http;
        this.serviceBase = 'https://devcmnh.azurewebsites.net/odata/getTopPartnerList'; //QA
    }
    TopPartnersService.prototype.getTopPartners = function () {
        /*
        let headers = new Headers({ 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiIwNjJiZmJjZS1kMDQ1LTRiYTYtYmY1Yi1lMzk2NjExOThiNDQiLCJ1bmlxdWVfbmFtZSI6InNlbnRoaWxAcHdyZGJ5LmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vYWNjZXNzY29udHJvbHNlcnZpY2UvMjAxMC8wNy9jbGFpbXMvaWRlbnRpdHlwcm92aWRlciI6IkFTUC5ORVQgSWRlbnRpdHkiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6Ijg2MmE3ZWY4LWYwZmQtNDVlYS04YTdhLTcyZTc3ZGJlNjM0ZCIsImlzcyI6Imh0dHA6Ly9kZXZjbW5oLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiMzEyNjJhMDMyMTIzNDhlMzhmMTJjMGJhOTY1NTY2NWMiLCJleHAiOjE0Nzg1MjIxNDIsIm5iZiI6MTQ2Mjk3MDE0Mn0.1pYg0JVphqGUw8X10xM0LOgQJPNPG9h2ocxcf0jPfF8' });
        let options = new RequestOptions({ headers: headers });
        console.log(options);
        
            return this.http.get(this.serviceBase, options)
                            .map(res => res.json().value)
                            .catch(this.handleError);
                            
                            //.catch((err : any) => {
                              //  console.log(err);
                               // //return Observable.of(undefined);
                               // //return Observable.throw(new Error(err.status));
                               // //return Observable.throw(err.statusText);
                             //});
                            
        */
        return this.http.get(this.serviceBase)
            .map(function (res) { return res.json().value; })
            .catch(this.handleError);
    };
    TopPartnersService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText + " **" : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    TopPartnersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_client_1.HttpClient])
    ], TopPartnersService);
    return TopPartnersService;
}());
exports.TopPartnersService = TopPartnersService;
//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiIwNjJiZmJjZS1kMDQ1LTRiYTYtYmY1Yi1lMzk2NjExOThiNDQiLCJ1bmlxdWVfbmFtZSI6InNlbnRoaWxAcHdyZGJ5LmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vYWNjZXNzY29udHJvbHNlcnZpY2UvMjAxMC8wNy9jbGFpbXMvaWRlbnRpdHlwcm92aWRlciI6IkFTUC5ORVQgSWRlbnRpdHkiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6Ijg2MmE3ZWY4LWYwZmQtNDVlYS04YTdhLTcyZTc3ZGJlNjM0ZCIsImlzcyI6Imh0dHA6Ly9kZXZjbW5oLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiMzEyNjJhMDMyMTIzNDhlMzhmMTJjMGJhOTY1NTY2NWMiLCJleHAiOjE0Nzg1MjIxNDIsIm5iZiI6MTQ2Mjk3MDE0Mn0.1pYg0JVphqGUw8X10xM0LOgQJPNPG9h2ocxcf0jPfF8 
//# sourceMappingURL=top-partners-service.js.map