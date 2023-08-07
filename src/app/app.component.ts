import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ChangeDetectorRef} from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // imports: [ RouterModule, CommonModule, FormsModule ],
    // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppComponent implements OnInit{
  title = 'paymentfoundational';
  constructor(
    private router: Router,
    private cdref: ChangeDetectorRef) {}
    
  ngOnInit():void {
    this.cdref.detectChanges()
    this.router.navigate(['home'])
  }
}
