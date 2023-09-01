import React from 'react';
import ChatWindow from '../components/ChatInterface/ChatWindow';
import TextInput from '../components/ChatInterface/TextInput';
import SendButton from '../components/ChatInterface/SendButton';

const ChatInterface = () => {
    return (
        <div>
            <ChatWindow />
            <TextInput />
            <SendButton />
        </div>
    );
};

export default ChatInterface;
