import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import React from 'react';
import { MobileAppBarItem } from './MobileAppBarItem';

export const MobileAppBar = () => {
    const [value, setValue] = React.useState(0);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999 }} elevation={3}>
            <BottomNavigation
                showLabels={false}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction showLabel={false} icon={<HomeIcon />} />
                <BottomNavigationAction showLabel={false} icon={<PeopleIcon />} />
                <BottomNavigationAction showLabel={false} icon={<ChatBubbleOutlineIcon />} />
                <BottomNavigationAction showLabel={false} icon={<CalendarTodayIcon />} />
            </BottomNavigation>
        </Paper>
    );
};
