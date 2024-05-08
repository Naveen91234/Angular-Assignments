import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
  constructor(private router: ActivatedRoute,) {}
  ngOnInit() {
    
    this.router.paramMap.subscribe( paramMap => {
      let c = paramMap.get('contactId');
      console.log(c)
  })
  }

}
