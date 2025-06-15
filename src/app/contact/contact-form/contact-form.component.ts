import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ValidationState } from '../../models/types';
import { ValidationService } from '../../services/validation.service';
import { FORM_VALIDATION } from '../../constants/app.constants';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: true,
  imports: [FormsModule, TranslatePipe]
})
export class ContactFormComponent {
  @ViewChild('name') nameEl!: ElementRef;
  @ViewChild('email') emailEl!: ElementRef;
  @ViewChild('message') messageEl!: ElementRef;
  @ViewChild('privacy') privacyEl!: ElementRef;
  @ViewChild('bubble') bubbleEl!: ElementRef;

  isInputValid: ValidationState = {
    'name': false,
    'email': false,
    'message': false,
    'privacy': false
  }

  private translate = inject(TranslateService);
  private validationService = inject(ValidationService);

  ngAfterViewInit() {
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    this.nameEl.nativeElement.onblur = (event: Event) => this.onInputBlur(event);
    this.emailEl.nativeElement.onblur = (event: Event) => this.onInputBlur(event);
    this.messageEl.nativeElement.onblur = (event: Event) => this.onInputBlur(event);
    this.privacyEl.nativeElement.onchange = (event: Event) => this.onCheckboxChange(event);
  }

  /**
   * Function that gets triggered every time the onblur event is triggered on the input elements.
   * @param event Blur event.
   */
  onInputBlur(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    
    this.showValidationResponse(target);
  }

  /**
   * Function that gets triggered when the privacy checkbox changes.
   * @param event Change event.
   */
  onCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.updateCheckboxValidation(target);
  }

  private updateCheckboxValidation(target: HTMLInputElement): void {
    const errorEl = document.getElementById(`${target.id}-error`);
    
    if (target.checked) {
      this.validationService.hideErrorMessage(errorEl);
      this.isInputValid[target.id] = true;
    } else {
      this.validationService.showErrorMessage(errorEl);
      this.isInputValid[target.id] = false;
    }
  }

  /**
   * Displays a validation response for the input fields.
   * @param target Event target element (input, textarea).
   */
  private showValidationResponse(target: HTMLInputElement | HTMLTextAreaElement): void {
    const errorEl = document.getElementById(`${target.id}-error`);
    
    if (!target.checkValidity()) {
      this.validationService.setValidationIcon(target, 'error');
      this.validationService.showErrorMessage(errorEl);
      this.isInputValid[target.id] = false;
    } else {
      this.validationService.setValidationIcon(target, 'valid');
      this.validationService.hideErrorMessage(errorEl);
      this.isInputValid[target.id] = true;
    }
  }

  /**
   * Sends an email with the filled in form data to the server.
   */
  async sendMail() {
    if (this.isFormValid()) {
      const formData = this.createFormData();
      this.showMailAnimation();
      
      await this.submitForm(formData);
      this.resetForm();
    }
  }

  private isFormValid(): boolean {
    return this.isInputValid['name'] && 
           this.isInputValid['email'] && 
           this.isInputValid['message'] && 
           this.isInputValid['privacy'];
  }

  private createFormData(): FormData {
    const data = new FormData();
    data.append('name', this.nameEl.nativeElement.value);
    data.append('mail', this.emailEl.nativeElement.value);
    data.append('message', this.messageEl.nativeElement.value);
    return data;
  }

  private showMailAnimation(): void {
    const bubbleEl = this.bubbleEl.nativeElement;
    bubbleEl.style.display = 'inline';
    bubbleEl.className = 'mail-bubble mail-animation';
  }

  private async submitForm(data: FormData): Promise<void> {
    await fetch('https://robin4consulting.com/send_mail.php', {
      method: 'post',
      body: data
    });
  }

  /**
   * Resets the form after the email has been send.
   */
  private resetForm(): void {
    this.resetInputElements();
    this.resetErrorMessages();
    this.resetInputValidation();
    setTimeout(() => this.resetBubble(), FORM_VALIDATION.ANIMATION_DELAY);
  }

  /**
   * Resets the value and styling of the input elements.
   */
  private resetInputElements(): void {
    this.nameEl.nativeElement.value = '';
    this.emailEl.nativeElement.value = '';
    this.messageEl.nativeElement.value = '';
    this.privacyEl.nativeElement.checked = false;
    
    this.validationService.resetInputBackground(this.nameEl.nativeElement);
    this.validationService.resetInputBackground(this.emailEl.nativeElement);
    this.validationService.resetInputBackground(this.messageEl.nativeElement);
  }

  /**
   * Hides the error messages for failed validation.
   */
  private resetErrorMessages(): void {
    this.validationService.hideErrorMessage(document.getElementById('name-error'));
    this.validationService.hideErrorMessage(document.getElementById('email-error'));
    this.validationService.hideErrorMessage(document.getElementById('message-error'));
    this.validationService.hideErrorMessage(document.getElementById('privacy-error'));
  }

  /**
   * Resets the input validation.
   */
  private resetInputValidation(): void {
    this.isInputValid = {
      'name': false,
      'email': false,
      'message': false,
      'privacy': false
    };
  }

  /**
   * Resets the mail info bubble.
   */
  private resetBubble(): void {
    this.bubbleEl.nativeElement.style.display = 'none';
    this.bubbleEl.nativeElement.className = 'mail-bubble';
  }
 }
