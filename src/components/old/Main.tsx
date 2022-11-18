import { BottomNavigation, BottomNavigationAction, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import { ResponsiveAppBar } from './ResponsiveAppBar';
import { ResponsiveDrawer } from './ResponsiveDrawer';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import { MobileAppBar } from '../new/MobileAppBar';

interface MainLayoutProps {
    children?: React.ReactNode;
    drawer?: React.ReactElement;
    currentLocation?: string;
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const MainLayout = ({ children, drawer }: MainLayoutProps) => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const isShow = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <ResponsiveAppBar />

            <Box sx={{ display: 'flex', width: 'calc(100% - 320px)', height: '100%' }}>
                {drawer && <ResponsiveDrawer drawer={drawer} openDrawer={true} />}
                {children}
            </Box>
            {!isShow && <MobileAppBar />}
        </Box>
    );
};
