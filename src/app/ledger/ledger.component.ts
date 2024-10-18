import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditFormComponent } from './edit-form/edit-form.component';

export interface LedgerItem {
  item: string;
  amount: number;
  date: string;
  cash_payment: number;       // New field
  online_payment: number;     // New field
  remaining_amount: number;   // New field
  payment_status: string;     // New field
}

const ELEMENT_DATA: LedgerItem[] = [
  {
    item: 'Purchase 1',
    amount: 100,
    date: '2024-10-01',
    cash_payment: 50,
    online_payment: 30,
    remaining_amount: 20,
    payment_status: 'Pending',
  },
  {
    item: 'Purchase 2',
    amount: 150,
    date: '2024-10-02',
    cash_payment: 100,
    online_payment: 0,
    remaining_amount: 50,
    payment_status: 'Completed',
  },
  {
    item: 'Payment 1',
    amount: 50,
    date: '2024-10-03',
    cash_payment: 0,
    online_payment: 50,
    remaining_amount: 0,
    payment_status: 'Completed',
  },
];


@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})


export class LedgerComponent {
  currentUserName: string = 'John Doe'; // Replace with actual user name
  searchQuery: string = '';

  // Define cards data
  cards = [
    { icon: 'shopping_cart', heading: 'Total Purchases', value: '$10,000' },
    { icon: 'payment', heading: 'Total Payment', value: '$7,500' },
    { icon: 'account_balance', heading: 'Total Outstanding', value: '$2,500' },
    { icon: 'store', heading: 'Total Sales', value: '$12,000' }
  ];

  performSearch() {
    console.log('Searching for:', this.searchQuery);
  }

  logout() {
    console.log('Logging out...');
  }

  displayedColumns: string[] = [
    'item',
    'amount',
    'date',
    'cash_payment',
    'online_payment',
    'remaining_amount',
    'payment_status',
    'action',
  ];
  dataSource = ELEMENT_DATA;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  editItem(item: LedgerItem): void {
    const dialogRef = this.dialog.open(EditFormComponent, {
      data: { ...item } // Pass the item to edit
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update the original data source with edited data
        const index = this.dataSource.findIndex(x => x.item === item.item);
        if (index >= 0) {
          this.dataSource[index] = result; // Update the edited item
        }
      }
    });
  }

  deleteItem(item: LedgerItem): void {
    // Implement delete logic here
    console.log('Delete Item:', item);
  }
}
