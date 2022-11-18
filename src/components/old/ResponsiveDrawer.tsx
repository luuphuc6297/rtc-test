// import {
//     Box,
//     Collapse,
//     Divider,
//     List,
//     ListItem,
//     ListItemButton,
//     ListItemIcon,
//     ListItemText,
//     useMediaQuery,
//     useTheme,
// } from '@mui/material';
// import React from 'react';
// import MuiDrawer from '@mui/material/Drawer';
// import { styled, Theme, CSSObject } from '@mui/material/styles';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { FindingConversation } from 'components/new/FindConversation';
// import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

// interface ResponsiveDrawerProps {
//     drawer?: React.ReactNode;
//     openDrawer?: boolean;
// }

// const StyledListConversation = styled(List)(({ theme }) => ({}));

// export const ResponsiveDrawer = ({ drawer, openDrawer }: ResponsiveDrawerProps) => {
//     const theme = useTheme();
//     const isShow = useMediaQuery(theme.breakpoints.up('sm'));
//     const [open, setOpen] = React.useState(true);
//     const handleClick = () => {
//         setOpen(!open);
//     };

//     return (
//         <ul className="list-group">
//             <li className="list-group-item">A simple default list group item</li>

//             <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
//             <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
//             <li className="list-group-item list-group-item-success">A simple success list group item</li>
//             <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
//             <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
//             <li className="list-group-item list-group-item-info">A simple info list group item</li>
//             <li className="list-group-item list-group-item-light">A simple light list group item</li>
//             <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
//             <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
//             <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
//             <li className="list-group-item list-group-item-success">A simple success list group item</li>
//             <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
//             <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
//             <li className="list-group-item list-group-item-info">A simple info list group item</li>
//             <li className="list-group-item list-group-item-light">A simple light list group item</li>
//             <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
//             <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
//             <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
//             <li className="list-group-item list-group-item-success">A simple success list group item</li>
//             <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
//             <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
//             <li className="list-group-item list-group-item-info">A simple info list group item</li>
//             <li className="list-group-item list-group-item-light">A simple light list group item</li>
//             <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
//             <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
//             <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
//             <li className="list-group-item list-group-item-success">A simple success list group item</li>
//             <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
//             <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
//             <li className="list-group-item list-group-item-info">A simple info list group item</li>
//             <li className="list-group-item list-group-item-light">A simple light list group item</li>
//             <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
//             <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
//             <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
//             <li className="list-group-item list-group-item-success">A simple success list group item</li>
//             <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
//             <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
//             <li className="list-group-item list-group-item-info">A simple info list group item</li>
//             <li className="list-group-item list-group-item-light">A simple light list group item</li>
//             <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
//             <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
//             <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
//             <li className="list-group-item list-group-item-success">A simple success list group item</li>
//             <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
//             <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
//             <li className="list-group-item list-group-item-info">A simple info list group item</li>
//             <li className="list-group-item list-group-item-light">A simple light list group item</li>
//             <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
//             <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
//             <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
//             <li className="list-group-item list-group-item-success">A simple success list group item</li>
//             <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
//             <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
//             <li className="list-group-item list-group-item-info">A simple info list group item</li>
//             <li className="list-group-item list-group-item-light">A simple light list group item</li>
//             <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
//         </ul>
//     );
// };

import { Box, List, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { FindingConversation } from '../new/FindConversation';
interface ResponsiveDrawerProps {
    drawer?: React.ReactNode;
    openDrawer?: boolean;
}

export const DrawerHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    flex: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const openedMixin = (theme: Theme, width: string, maxWidth: string): CSSObject => ({
    width: width,
    maxWidth: maxWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })<{
    width: string;
    maxWidth: string;
    height: string;
}>(({ theme, open, width, maxWidth, height }) => ({
    width: '100%',
    maxWidth: maxWidth,
    zIndex: 99,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme, width, maxWidth),
        '& .MuiDrawer-paper': openedMixin(theme, width, maxWidth),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
    '.MuiPaper-root': {
        height: height,
    },
}));

// const StyledListConversation = styled(Box)(({ theme }) => ({
//     width: '100%',
//     padding: 0,
// }));

const StyledDrawer = styled(Box)(({ theme }) => ({}));
export const ResponsiveDrawer = ({ drawer, openDrawer }: ResponsiveDrawerProps) => {
    const theme = useTheme();
    const isShow = useMediaQuery(theme.breakpoints.up(720));

    // return (
    //     <Drawer
    //         height={!isShow ? 'calc(100vh - 56px)' : '100vh'}
    //         width="100%"
    //         maxWidth={isShow ? '348px' : '780px'}
    //         variant="permanent"
    //         open={openDrawer}
    //     >
    //         <DrawerHeader>
    //             haha
    //             <FindingConversation />
    //         </DrawerHeader>

    //     </Drawer>
    // );
    return (
        <Box
            sx={{
                width: 320,
                height: !isShow ? 'calc(100vh - 56px)' : '100%',
                borderRight: '1px solid rgba(0,0,0,.12)',
            }}
        >
            <Box
                sx={{
                    height: 64,
                    borderBottom: '1px solid rgba(0,0,0,.12)',
                }}
            >
                haha
            </Box>
        </Box>
    );
};
