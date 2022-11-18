import { getShortName, stringToColor } from 'helpers';
import { AttributesUser } from 'models';
import { Avatar, styled, Typography } from '@mui/material';
import React from 'react';

export type AvatarConversationProps = Pick<AttributesUser, 'avatarUrl' | 'firstName' | 'lastName'>;

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 40,
    height: 40,
}));

export const CustomizedAvatar = React.memo(({ firstName, lastName, avatarUrl }: AvatarConversationProps) => {
    const firstCharacter = getShortName(firstName);

    const secondCharacter = getShortName(lastName);

    const displayName = firstCharacter + secondCharacter;

    const backgroundColorAvatar = stringToColor(`${firstCharacter}${secondCharacter}`);

    const renderAvatar = () => {
        if (!avatarUrl) {
            return (
                <StyledAvatar sx={{ bgcolor: backgroundColorAvatar }} alt={displayName}>
                    <Typography sx={{ fontWeight: 600 }}>{displayName}</Typography>
                </StyledAvatar>
            );
        } else {
            return <StyledAvatar alt={displayName} src={avatarUrl} />;
        }
    };

    return <React.Fragment>{renderAvatar()}</React.Fragment>;
});
