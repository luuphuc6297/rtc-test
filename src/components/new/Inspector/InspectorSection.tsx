import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { InspectorSectionInfo } from './InspectorSectionInfo';

const StyledInspectorSectionWrapper = styled(Box)(({ theme }) => ({}));

export const InspectorSection = () => {
    return (
        <StyledInspectorSectionWrapper>
            <InspectorSectionInfo />
        </StyledInspectorSectionWrapper>
    );
};
