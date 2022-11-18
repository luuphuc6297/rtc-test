import { Box } from '@mui/material';
import { Inspector } from 'components/new/Inspector';
import { RtcContentHeader } from 'components/new/RtcContentHeader';
import { MainLayout } from 'components/old/Main';
import { RtcLeftSidebar } from 'components/old/RtcLeftSidebar';

import { SimpleCollapse } from 'components/new/SimpleCollapse';
import { Chatting } from 'components/old/Chatting';
import { conversation } from 'mocks/conversationId';
import me from 'mocks/me.json';
import { workspace } from 'mocks/workspace';
import { messages } from 'mocks/messages';

function App() {
    return (
        <MainLayout drawer={<RtcLeftSidebar />}>
            <Box sx={{ width: '100%' }}>
                <RtcContentHeader />
                {/*@ts-ignore */}
                <Chatting workspace={workspace} conversation={conversation} currentUser={me} messages={messages} />
                <SimpleCollapse>
                    <Inspector />
                </SimpleCollapse>
            </Box>
        </MainLayout>
    );
}

export default App;
