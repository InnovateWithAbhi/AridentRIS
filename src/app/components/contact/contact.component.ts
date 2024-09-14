import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: '',
  };

  constructor() {}

  onSubmit() {
    if (this.isFormValid()) {
      // Handle form submission (e.g., send data to a server or service)
      console.log('Form Submitted:', this.contactForm);

      // Reset the form after submission
      this.resetForm();

      // Optionally display success feedback to the user
      alert('Message sent successfully!');
    } else {
      // Display an error if form is not valid
      alert('Please fill in all fields correctly.');
    }
  }

  // Method to validate the form
  isFormValid(): boolean {
    const { name, email, message } = this.contactForm;
    return (
      name.trim() !== '' && this.isValidEmail(email) && message.trim() !== ''
    );
  }

  // Method to validate email format
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Method to reset the form
  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      message: '',
    };
  }
}
