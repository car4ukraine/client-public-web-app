import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  public readonly title: string = 'Want to Donate Car to Ukraine?';
}
