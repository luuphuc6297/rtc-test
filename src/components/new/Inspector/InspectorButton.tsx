import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

interface InspectorButtonProps {
    checked: boolean;
    onChange: () => void;
}
const StyledInspectorWrapper = styled(Box)(({ theme }) => ({
    transition: 'all .2s',
    position: 'fixed',
    zIndex: 12,
    top: '50%',
    right: '-15px',
    transform: 'translateY(-50%)',
    boxShadow: '0 1px 1px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)',
}));

const StyledInspectorButton = styled(IconButton)(({ theme }) => ({
    flex: '0 0 auto',
    color: 'rgba(0, 0, 0, 0.54)',
    padding: 12,
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: '50%',
}));

export const InspectorButton = ({ checked, onChange }: InspectorButtonProps) => {
    return (
        <StyledInspectorWrapper>
            <StyledInspectorButton onClick={onChange}>
                {checked ? <ArrowForwardIosOutlinedIcon /> : <ArrowBackIosNewOutlinedIcon />}
            </StyledInspectorButton>
        </StyledInspectorWrapper>
    );
};
