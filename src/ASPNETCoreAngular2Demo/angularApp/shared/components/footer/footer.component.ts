import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'startertemplatefooter',
    templateUrl: './footer.component.html'
})

export class FooterComponent {
    copyRight : Date = new Date();
}
