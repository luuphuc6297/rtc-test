import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledInspectorHeaderWrapper = styled(Box)(({ theme }) => ({
    height: 64,
    display: 'flex',
    borderBottom: '1px solid rgba(0,0,0,.12)',
    alignItems: 'center',
    padding: '0 16px',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({}));

export const InspectorHeader = () => {
    return (
        <StyledInspectorHeaderWrapper>
            <StyledTitle>Detail</StyledTitle>
        </StyledInspectorHeaderWrapper>
    );
};
