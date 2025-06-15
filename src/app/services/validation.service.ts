import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  
  setValidationIcon(target: HTMLElement, type: 'error' | 'valid'): void {
    const iconUrl = type === 'error' ? '/assets/icons/error.svg' : '/assets/icons/valid.svg';
    target.style.background = `white url('${iconUrl}') no-repeat right 25px top 10px`;
  }

  showErrorMessage(errorEl: HTMLElement | null): void {
    if (errorEl) errorEl.style.display = 'inline';
  }

  hideErrorMessage(errorEl: HTMLElement | null): void {
    if (errorEl) errorEl.style.display = 'none';
  }

  resetInputBackground(element: HTMLElement): void {
    element.style.background = "white";
  }
}