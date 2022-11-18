import { Conversation, CurrentUser, ListResponse, WorkSpace } from 'models';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
// import { ConversationsTitle } from '../../ui';
import { LoadMoreMessages } from './LoadMoreMessages';
import { MessagesArea } from './MessagesArea';
import { SenderArea } from './SenderArea';

interface ChattingProps {
    workspace: WorkSpace;
    conversation: Conversation;
    messages?: ListResponse;
    valueEditor: string;
    currentUser?: CurrentUser;
    typing?: any;
    loadMessages: () => void | any;
    sendMessage?: (messText: string) => void;
}

const StyledMessageContentDetail = styled(Box)(({ theme }) => ({
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '100%',
}));

const StyledTitleChat = styled(Box)(({ theme }) => ({
    height: 60,
    position: 'relative',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    padding: '0px 20px',
    boxSizing: 'content-box',
}));

export const Chatting = ({
    workspace,
    conversation,
    currentUser,
    messages,
    valueEditor,
    typing,
    loadMessages,
    sendMessage,
}: ChattingProps) => {
    React.useEffect(() => {
        const elmContent: any = document.getElementById(`scrollable-box`);
        if (elmContent) elmContent.scrollTop = elmContent.scrollHeight;
    }, [conversation._id]);

   
    return (
        <StyledMessageContentDetail id={conversation._id}>
            {/* <StyledTitleChat>
                <ConversationsTitle
                    title={conversation.attributes.title}
                    firstName={conversation.attributes.title}
                    lastName=""
                    avatarUrl={conversation.attributes?.imagePath}
                    textTimeLastMess={`last seen ${formatDistance(conversation.attributes.lastMessage.createdAt)}`}
                />
            </StyledTitleChat> */}
            <MessagesArea>
                <LoadMoreMessages
                    messages={messages}
                    currentUser={currentUser}
                    typing={typing}
                />
            </MessagesArea>

            <SenderArea
                workspace={workspace}
                conversation={conversation}
                valueEditor={valueEditor}
                sendMessage={sendMessage}
            />
        </StyledMessageContentDetail>
    );
};
