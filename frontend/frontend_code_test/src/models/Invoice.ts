export interface Invoice {
    id: number;
    vendorName: string;
    amount: number;
    dueDate: string;
    description: string;
    paid: boolean;
    createdAt: string;
    updatedAt: string;
    userId: number;
  }