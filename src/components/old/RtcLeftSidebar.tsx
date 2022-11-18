import { Box, TextField, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledRtcLeftSidebarWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '100%',
    width: '100%',
    maxWidth: 380,
}));

const StyledHeaderAreaWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 64,
    padding: 12,
    borderBottom: '1px solid rgba(0,0,0,.12)',
}));

const StyledContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const RtcLeftSidebar = () => {
    return (
        <StyledRtcLeftSidebarWrapper>
            <StyledHeaderAreaWrapper>
                <StyledContainer></StyledContainer>

                {/* <StyledDivider /> */}
            </StyledHeaderAreaWrapper>
        </StyledRtcLeftSidebarWrapper>
    );
};
