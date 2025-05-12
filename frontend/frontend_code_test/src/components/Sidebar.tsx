import { Box, Typography, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ReceiptIcon from '@mui/icons-material/Receipt'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import MoneyOffIcon from '@mui/icons-material/MoneyOff'
import BarChartIcon from '@mui/icons-material/BarChart'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export function Sidebar() {
  return (
    <Box
      sx={{
        width: 240,
        height: '100vh',
        bgcolor: 'transparent',
        background: theme =>
          `linear-gradient(180deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
        color: '#333',
        p: 2,
        boxSizing: 'border-box',
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          bgcolor: '#fff',
          borderRadius: 2,
          p: 2,
          textAlign: 'center',
          mb: 4,
        }}
      >
        <Typography variant="h6" color="text.secondary">
          LOGO
        </Typography>
      </Box>

      {/* Menu title */}
      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500 }}>
        Menu
      </Typography>

      {/* Menu items */}
      <List disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 32 }}><HomeIcon sx={{ color: '#333' }} /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 32 }}><ReceiptIcon sx={{ color: '#333' }} /></ListItemIcon>
          <ListItemText primary="Invoices" />
          <ChevronRightIcon fontSize="small" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 32 }}><AccountBalanceIcon sx={{ color: '#333' }} /></ListItemIcon>
          <ListItemText primary="Bills" />
          <ChevronRightIcon fontSize="small" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 32 }}><MoneyOffIcon sx={{ color: '#333' }} /></ListItemIcon>
          <ListItemText primary="Expenses" />
          <ChevronRightIcon fontSize="small" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 32 }}><BarChartIcon sx={{ color: '#333' }} /></ListItemIcon>
          <ListItemText primary="Reports" />
          <ChevronRightIcon fontSize="small" />
        </ListItemButton>
      </List>
    </Box>
  )
}
