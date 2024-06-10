import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, ToastModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {

  constructor(private messageService: MessageService) { }

  wasSubmittedPrior = false

  contactForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    queryType: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    consent: new FormControl(false, Validators.requiredTrue),
  })

  onSubmit(): void {
    this.wasSubmittedPrior = true;

    if (this.contactForm.valid) {
      this.messageService.add({ severity: "success", summary: "Message Sent", detail: "Thanks for completing the form. We'll be in touch soon!" })
    }
  }
}
