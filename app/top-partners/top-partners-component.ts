import { Component } from '@angular/core';
import { TopPartnersService } from './top-partners-service';
import { TopPartners } from './top-partners';
import { topPartnersRouting } from './top-partners-routing';
import { OnInit } from '@angular/core';

@Component({
    selector: 'top-partners',
    templateUrl: './app/top-partners/top-partners.html'
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
            .subscribe(tp => this.topPartners = tp,
                        err => console.log(err)
            );
    }
}
