import React from 'react';
import { InvoicesTable } from './InvoicesTable';
import { Container, Typography } from '@mui/material';
import { useInvoices } from '../hooks/useInvoices';
import { InvoiceModal } from './InvoiceModal';

export function InvoicesPage() {
  const { data: invoices = [], isLoading, error } = useInvoices();
  const [selected, setSelected] = React.useState<typeof invoices[0] | null>(null);

  if (error) {
    return <Typography color="error">Eroare: {error.message}</Typography>;
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Invoices
      </Typography>

      <InvoicesTable
        invoices={invoices}
        loading={isLoading}
        onSelect={(inv) => setSelected(inv)}
      />

      <InvoiceModal
        invoice={selected}
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
      />
    </Container>
  );
}