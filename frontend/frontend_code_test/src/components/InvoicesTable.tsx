import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef, GridRowParams } from '@mui/x-data-grid';
import { Checkbox, useTheme } from '@mui/material';
import type { Invoice } from '../models/Invoice';

interface InvoicesTableProps {
    invoices: Invoice[];
    loading: boolean;
    onSelect: (inv: Invoice) => void;
}

export function InvoicesTable({ invoices, loading, onSelect }: InvoicesTableProps) {
    const theme = useTheme();
    
    const columns: GridColDef[] = [
        {
            field: 'select',
            headerName: '',
            width: 50,
            sortable: false,
            renderHeader: () => <Checkbox disabled />,
            renderCell: () => <Checkbox />,
        },
        {
            field: 'createdAt',
            headerName: 'Date',
            width: 120,
            valueFormatter: ({ value }) =>
                new Date(value as string),
        },
        { field: 'vendorName', headerName: 'Payee', flex: 1 },
        { field: 'description', headerName: 'Description', flex: 1 },
        {
            field: 'dueDate',
            headerName: 'Due Date',
            width: 120,

        },
        {
            field: 'amount',
            headerName: 'Amount',
            width: 120,
        },
        {
            field: 'paid',
            headerName: 'Status',
            width: 100,
            renderCell: ({ value }) =>
                (value as boolean)
                    ? <span style={{ color: theme.palette.success.main }}>Paid</span>
                    : <span style={{ color: theme.palette.primary.main }}>Open</span>,
        },
    ];

    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={invoices || []}
                columns={columns}
                getRowId={row => row.id}
                loading={loading}
                hideFooterSelectedRowCount
                disableRowSelectionOnClick
                onRowClick={(params: GridRowParams) => {
                    onSelect(params.row as Invoice);
                }}
            />
        </div>
    );
}
