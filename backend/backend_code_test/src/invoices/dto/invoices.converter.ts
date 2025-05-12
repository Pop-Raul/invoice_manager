import { Invoice } from "@prisma/client";
import { InvoiceDto } from "./invoices.dto";



export function toInvoiceDto(inv: Invoice): InvoiceDto {
  return {
    id: inv.id,
    vendorName: inv.vendorName,
    amount: inv.amount,
    dueDate: inv.dueDate.toISOString(),
    description: inv.description,
    paid: inv.paid,
    createdAt: inv.createdAt.toISOString(),
    updatedAt: inv.updatedAt.toISOString(),
    userId: inv.userId,
  };
}