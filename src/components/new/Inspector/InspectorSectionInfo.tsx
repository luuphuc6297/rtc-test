import { Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledInspectorSectionInfoWrapper = styled(Box)(({ theme }) => ({
    borderBottom: '1px solid rgba(0,0,0,.12)',
}));

export const InspectorSectionInfo = () => {
    return <StyledInspectorSectionInfoWrapper></StyledInspectorSectionInfoWrapper>;
};
