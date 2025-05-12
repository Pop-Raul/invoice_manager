import { AppBar, Toolbar, IconButton, Typography, InputBase, Box, Avatar, alpha } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchIcon from '@mui/icons-material/Search';

const styles = {
    appBar: {
        backgroundColor: 'background.paper',
        borderBottom: (theme: { palette: { divider: string; }; }) => `1px solid ${alpha(theme.palette.divider, 0.5)}`,
        ml: { sm: '240px' },
        width: { sm: 'calc(99% - 240px)' },
    },
    toolBar: { minHeight: 64, px: 2 },
    searchBar: {
        position: 'relative',
        borderRadius: 1,
        backgroundColor: (theme: { palette: { action: { hover: string; }; }; }) => alpha(theme.palette.action.hover, 0.15),
        '&:hover': { backgroundColor: (theme: { palette: { action: { hover: string; }; }; }) => alpha(theme.palette.action.hover, 0.25) },
        mr: 2,
        width: { xs: '100px', sm: '200px', md: '300px' },
    },
    imputBase: {
        color: 'text.primary',
        pl: (theme: { spacing: (arg0: number) => any; }) => `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
    },
    iconButton: { color: 'text.secondary', mr: 1 },
    avatar: { width: 32, height: 32 }
}

interface TopbarProps {
    onMenuToggle?: () => void;
}

export function Topbar({ onMenuToggle }: TopbarProps) {
    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={styles.appBar}
        >
            <Toolbar sx={ styles.toolBar}>
                <IconButton edge="start" onClick={onMenuToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuIcon />
                </IconButton>

                <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                    <Typography variant="body1" >
                        Home
                    </Typography>
                    <Typography variant="body1" sx={{ mx: 1 }}>/</Typography>
                    <Typography variant="body1" color="text.primary">
                        Invoices
                    </Typography>
                </Box>

                <Box sx={{ flexGrow: 1 }} />

                <Box
                    sx={styles.searchBar}
                >
                    <Box sx={{ position: 'absolute', height: '100%', pl: 1, display: 'flex', alignItems: 'center' }}>
                        <SearchIcon fontSize="small" color="action" />
                    </Box>
                    <InputBase
                        placeholder="Search…"
                        sx={styles.imputBase}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Box>

                <IconButton size="large" sx={styles.iconButton}>
                    <NotificationsNoneIcon />
                </IconButton>
                <IconButton size="large" sx={styles.iconButton}>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton size="large" sx={styles.iconButton}>
                    <DarkModeOutlinedIcon />
                </IconButton>

                <Avatar
                    src=""
                    sx={styles.avatar}
                />
            </Toolbar>
        </AppBar>
    );
}
