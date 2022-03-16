import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdOffcanvasComponent, NgbdOffcanvasContent } from './offcanvas-component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdOffcanvasComponent, NgbdOffcanvasContent],
  exports: [NgbdOffcanvasComponent],
  bootstrap: [NgbdOffcanvasComponent]
  // entryComponents: [NgbdModalContent] // this line would be needed in Angular 8 or older
})
export class NgbdOffcanvasComponentModule {}