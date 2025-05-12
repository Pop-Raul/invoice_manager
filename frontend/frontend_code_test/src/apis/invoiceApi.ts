import type { Invoice } from "../models/Invoice";
import api from "./interceptor";

  
  export async function getInvoices(): Promise<Invoice[]> {
    const response = await api.get<Invoice[]>('/invoices');
    return response.data;
  }