import AttachFileIcon from '@mui/icons-material/AttachFile';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';

const StyledAttachBtn = styled(IconButton)(({ theme }) => ({
    width: 32,
    height: 38,
    flex: 0,
}));

export const AttachBtn = () => {
    return (
        <StyledAttachBtn color="primary">
            <AttachFileIcon />
        </StyledAttachBtn>
    );
};
