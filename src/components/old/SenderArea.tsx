import { Box } from '@mui/material';
import { styled } from '@mui/system';

import { AttachBtn } from './AttachBtn';
import { debounce, get, trim } from 'lodash';
import React from 'react';
import { Conversation, WorkSpace } from 'models';
import { TinyMCE } from 'components/old/TinyMCE';
import { SenderIconBtn } from 'components/old/SenderIconBtn';

// import { messageApis } from 'apis/messageApis';
// import { ConversationSlice, MessageSlice } from 'app/slices';

interface SenderAreaProps {
    workspace?: WorkSpace;
    conversation?: Conversation;
    valueEditor?: string;
    execute?: (value: string, conversation: Conversation) => void;
    sendMessage?: (messText: string) => void;
    handleEnter?: () => void;
    handleChange?: () => void;
}

const StyledSenderAreaWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    gap: 4,
    padding: '15px 20px',
    maxHeight: 150,
    flexShrink: 0,
    background: '#ffffff',
    minHeight: 56,
    borderTop: '1px solid rgb(230, 230, 230)',
    alignItems: 'center',
}));

export const SenderArea = ({
    workspace,
    conversation,
    valueEditor,
    execute,
    sendMessage,
    handleEnter,
    handleChange,
}: SenderAreaProps) => {
    // const conversation = useConversationStore((state: ConversationSlice) => state.conversation);

    const [length, setLength] = React.useState<number>(0);
    const [isStarting, setIsStarting] = React.useState<boolean>(false);

    // const workspace = useStore((state: WorkSpaceSliceState | any) => state.workspace);
    // const createMessage = useConversationStore((state: MessageSlice) => state.createMessage);

    // const sendMessage = (messText: string) => {
    //     const draffMess: any = JSON.parse(window.localStorage.getItem('draftMessage') || '{}');

    //     delete draffMess[conversation._id];

    //     window.localStorage.setItem('draftMessage', JSON.stringify(draffMess));

    //     createMessage(workspace.id, conversation._id, trim(messText));
    // };

    const handleInit = (evt: any, editor: any) => {
        setLength(editor.getContent({ format: 'text' }).length);
    };

    // const execute = async (value: string, conversation: Conversation) => {
    //     messageApis.stopTyping(workspace.id, conversation._id).then();

    //     const draffMess: any = JSON.parse(window.localStorage.getItem('draftMessage') || '{}');

    //     draffMess[conversation._id] = value;

    //     window.localStorage.setItem('draftMessage', JSON.stringify(draffMess));
    //     setIsStarting(false);
    // };

    // const handler = React.useCallback(debounce(execute, 300), []);

    // const handleChange = async (value: string, editor: any) => {
    //     const content = editor.getContent({ format: 'text' });

    //     setValueEditor(value);
    //     setLength(content.length);
    //     if (!isStarting) {
    //         setIsStarting(true);
    //         messageApis.startTyping(workspace.id, conversation._id).then();
    //     }
    //     handler(content, conversation);
    //     editor.selection.select(editor.getBody(), true);
    //     editor.selection.collapse(false);
    //     editor.focus();
    // };

    // const handleSendMessage = async () => {
    //     if (valueEditor) {
    //         sendMessage(valueEditor);
    //     }
    //     setValueEditor('');
    // };

    // const handleEnter = async (el: any) => {
    //     const mess = el.children[0].innerHTML;

    //     if (mess === '<br data-mce-bogus="1">') {
    //         return;
    //     } else {
    //         if (mess) {
    //             sendMessage(mess);
    //         }
    //         setValueEditor('');
    //     }
    // };

    // React.useEffect(() => {
    //     const cacheMessage = get(
    //         JSON.parse(window.localStorage.getItem('draftMessage') || '{}'),
    //         get(conversation, '_id', ''),
    //         ''
    //     );
    //     setValueEditor(cacheMessage);
    // }, [conversation]);

    return (
        <StyledSenderAreaWrapper>
            <TinyMCE
                onInit={handleInit}
                value={valueEditor}
                onChange={() => console.log('abc')}
                onEnter={(evt: any) => console.log('e', evt)}
                placeholder="Type a message and press ENTER to send..."
            />
            {length === 0 ? <AttachBtn /> : <SenderIconBtn onClick={() => console.log('handle send message')} />}
        </StyledSenderAreaWrapper>
    );
};
