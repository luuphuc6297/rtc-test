import { BottomNavigationAction } from '@mui/material';
import React from 'react';

interface MobileAppBarItemProps {
    icon: React.ReactElement;
    showLabel: boolean;
}
export const MobileAppBarItem = ({ showLabel, icon }: MobileAppBarItemProps) => {
    return <BottomNavigationAction showLabel={showLabel} icon={icon} />;
};
