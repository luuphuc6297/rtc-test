import { FormControl } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import React from 'react';

import { InspectorButton } from '../Inspector/InspectorButton';
interface SimpleCollapseProps {
    children: React.ReactNode;
}

export const SimpleCollapse = ({ children }: SimpleCollapseProps) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Box>
            <InspectorButton checked={checked} onChange={handleChange} />
            <Collapse in={checked}>{children}</Collapse>
        </Box>
    );
};
