
import { Box } from '@mui/material';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/TopBar';
import { InvoicesPage } from '../components/InvoicesPage';

export const Layout = () => {
    return (<>
        <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            <Box
                component="aside"
                sx={{
                    width: 240,
                    borderRight: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                }}
            >
                <Sidebar />
            </Box>

            <Box
                component="main"
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                }}
            >
                <Box
                    component="header"
                    sx={{
                        height: 64,
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                        zIndex: 1,
                        flexShrink: 0,
                    }}
                >
                    <Topbar />
                </Box>
                <Box
                    component="section"
                    sx={{
                        flex: 1,
                        overflowY: 'auto',
                        p: 2,
                        bgcolor: 'background.default',
                    }}
                >
                    <InvoicesPage />
                </Box>
            </Box>
        </Box>
    </>)
}