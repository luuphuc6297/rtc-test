import { CurrentUser, LastMessage, ListResponse, Message } from 'models';
import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import { chain, isEqual, keys, orderBy } from 'lodash';
import moment from 'moment';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { BoxMessages } from './BoxMessages';
import { DateMessages } from './DateMessages';
import { chatMessages } from './chatMessage';

interface LoadMoreMessagesProps {
    currentUser?: CurrentUser;
    messages?: ListResponse;
    typing: any;
}

const StyledBoxLoadMore = styled(Box)(({ theme }) => ({
    height: '100%',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse',
    padding: 16,
}));

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
    marginTop: 16,
}));

export const LoadMoreMessages = ({ currentUser, messages, typing }: LoadMoreMessagesProps) => {
    const [currentData, setCurrentData] = React.useState<any>([]);
    const [oldData, setOldData] = React.useState<Message[]>([]);

    const [more, setMore] = React.useState<boolean>(false);

    const elmContent: any = document.getElementById('scrollable-box');

    const loadMessages = () => {
        if (messages.data.length >= 30) {
            const newPageNumber = pageNumber + 1;
            const allPromise = Promise.all([
                getDataMessages(workspace.id, conversation._id, newPageNumber),
                updatePageNumber(conversation._id, newPageNumber),
            ]);
            (async () => {
                await allPromise;
            })();
        }
    };

    React.useEffect(() => {
        console.log(messages);
        const count: number | any = messages?.meta?.count;
        if (!isEqual(currentData, oldData)) {
            if (currentData.length - oldData.length === 1) {
                elmContent.scrollTo({
                    top: elmContent.scrollHeight - elmContent.clientHeight,
                });
            }
            setOldData(currentData);
        } else {
            if (count !== 0 && count - currentData.length === 0 && more) {
                setMore(false);
            }
        }
    }, [currentData]);

    React.useEffect(() => {
        setCurrentData(messages?.data);
    }, [messages]);

    // Maybe change useCallback
    const renderMessageItem = () => {
        const groupByDate = chain(
            orderBy(
                currentData.map((i: any) => ({ ...i, createdAt: moment(i.meta.createdAt).format('YYYY-MM-DD') })),
                ['createdAt'],
                ['asc']
            )
        )
            .groupBy('createdAt')
            .value();

        return (
            <>
                {keys(groupByDate).map((date: string, index: number) => {
                    const messagesInDay = groupByDate[date].map((message: Message, index: number) => {
                        const lastMessage: LastMessage | any =
                            index === groupByDate[date].length - 1 ? {} : groupByDate[date][index + 1];
                        return (
                            <Box key={message._id}>
                                <BoxMessages message={message} lastMessage={lastMessage} currentUser={currentUser} />
                            </Box>
                        );
                    });
                    return (
                        <Box key={`${date}${index}`}>
                            <DateMessages key={date} createdAtMessage={date} createdAtLastMessage={''} />
                            {messagesInDay}
                        </Box>
                    );
                })}
            </>
        );
    };

    return (
        <StyledBoxLoadMore id="scrollable-box">
            <InfiniteScroll
                dataLength={currentData.length}
                scrollableTarget="scrollable-box"
                next={loadMessages}
                hasMore={currentData.length < 30 ? false : more}
                loader={
                    <Box sx={{ textAlign: 'center' }}>
                        <StyledCircularProgress />
                    </Box>
                }
            >
                {renderMessageItem()}
                {/* {typing.map((user: AttributesUser) => {
                    return user && user._id !== currentUser?.id && <TypingChat user={user} />;
                })} */}
            </InfiniteScroll>
        </StyledBoxLoadMore>
    );
};
