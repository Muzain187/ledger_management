import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface LedgerItem {
  item: string;
  amount: number;
  date: string;
  cash_payment: number;
  online_payment: number;
  remaining_amount: number;
  payment_status: string;
}

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
})
export class EditFormComponent {
  constructor(
    public dialogRef: MatDialogRef<EditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LedgerItem
  ) {}

  onSubmit(): void {
    // Here, you could add logic to save changes
    this.dialogRef.close(this.data); // Close modal and return updated data
  }

  close(): void {
    this.dialogRef.close(); // Close the modal without saving
  }
}
