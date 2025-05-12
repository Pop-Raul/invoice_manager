import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Grid,
} from '@mui/material';
import type { Invoice } from '../models/Invoice';

interface InvoiceModalProps {
  invoice: Invoice | null;
  open: boolean;
  onClose: () => void;
}

export function InvoiceModal({ invoice, open, onClose }: InvoiceModalProps) {
  if (!invoice) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Invoice Details</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          {Object.entries(invoice).map(([key, val]) => (
            <React.Fragment key={key}>
              <Typography variant="subtitle2" color="textSecondary">
                {key}
              </Typography>
              <Typography variant="body2">
                {val?.toString()}
              </Typography>
            </React.Fragment>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
