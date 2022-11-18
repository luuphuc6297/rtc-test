import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { InspectorHeader } from './InspectorHeader';
import { InspectorSection } from './InspectorSection';
import { InspectorButton } from './InspectorButton';
const StyledInspectorWrapper = styled(Box)(({ theme }) => ({
    transition: 'all .2s',
    transform: 'translateX(0)',
    position: 'fixed',
    overflowX: 'hidden',
    overflowY: 'auto',
    height: 'calc(var(--vh, 1vh)*100)',
    width: 320,
    borderLeft: '1px solid rgba(0,0,0,.12)',
    top: 0,
    right: 0,
}));

export const Inspector = () => {
    return (
        <StyledInspectorWrapper>
            <InspectorHeader />
            <InspectorSection />
        </StyledInspectorWrapper>
    );
};
