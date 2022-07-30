import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { map } from "rxjs";
import {
  getMessagesService,
  RespMessageModel,
} from "../../../../service/admin";

export const Messages = () => {
  const [messages, setMessages] = useState<RespMessageModel[]>([]);
  const getMessages = () => {
    getMessagesService()
      .pipe(map((res) => res.data))
      .subscribe((messages) => {
        setMessages(messages as RespMessageModel[]);
      });
  };
  useEffect(() => {
    !(messages === []) && getMessages();
    // eslint-disable-next-line
  }, []);
  return (
    <MessageContainer>
      {messages.map((message) => (
        <h1 key={message.messageUid}>{message.message}</h1>
      ))}
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  width: 840px;
  height: 670px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;
