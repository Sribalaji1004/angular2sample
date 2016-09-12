import { Component } from '@angular/core';
import { TopPartnersService } from './top-partners-service';
import { TopPartners } from './top-partners';
import { topPartnersRouting } from './top-partners-routing';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Component({
    moduleId: module.id, //Remember: setting moduleId: module.id in the @Component decorator is the key here. If you don't have that then Angular 2 will be looking for your files at the root level.
    selector: 'top-partners',
    templateUrl: 'top-partners.html'
    //templateUrl: './app/top-partners/top-partners.html'
})
export class TopPartnersComponent implements OnInit {

    constructor(private topPartnerService:TopPartnersService) {
    
        
    }

    public topPartners : TopPartners[];
    public pageTitle: string;
    ngOnInit(){
        this.pageTitle = "Top Partners";
        console.log("in init");
        
        this.topPartnerService.getTopPartners()
            .catch(err => { console.log(err + ' in Component'); return Observable.throw(true); })
            .subscribe(tp => { this.topPartners = tp, err => { console.log("error here"); console.log(err)}});
            
    }
}
