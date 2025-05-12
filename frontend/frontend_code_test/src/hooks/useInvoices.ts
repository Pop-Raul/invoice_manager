import { useQuery } from "react-query";
import type { Invoice } from "../models/Invoice";
import { getInvoices } from "../apis/invoiceApi";


export function useInvoices() {
  return useQuery<Invoice[], Error>({
    queryKey: ['invoices'],
    queryFn: getInvoices,
  });
}