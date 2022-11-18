import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { AppBar, Box, OutlinedInput, styled } from '@mui/material';

import { MetaParams } from 'models';
import * as React from 'react';

interface FindingConversationProps {
    filter?: MetaParams | any;
    onChange?: (newFilter: MetaParams) => void;
    onSearchChange?: (newFilter: MetaParams) => void;
}

const StyledSearchConversationArea = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    height: 64,
    justifyContent: 'space-between',
    top: 0,
}));

const StyledWrapperButton = styled(Box)(({ theme }) => ({}));

const StyledSearchInput = styled(OutlinedInput)(({ theme }) => ({
    height: 34,
    borderRadius: 8,
    width: '100%',
}));

export const FindingConversation = ({ filter, onChange, onSearchChange }: FindingConversationProps) => {
    const searchRef = React.useRef<HTMLInputElement>();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!onSearchChange) return;

        const newFilter: MetaParams = {
            ...filter,
            name_like: e.target.value,
            _page: 1,
        };
        onSearchChange(newFilter);
    };

    return (
        <StyledSearchConversationArea>
            <StyledWrapperButton
                onClick={() => {
                    console.log('first');
                }}
            >
                {/* <StyledSearchInput
                    id="searchByName"
                    label="Search by name"
                    endAdornment={<SearchOutlinedIcon />}
                    defaultValue={filter['name_like']}
                    onChange={handleSearchChange}
                    inputRef={searchRef}
                /> */}
            </StyledWrapperButton>
        </StyledSearchConversationArea>
    );
};
