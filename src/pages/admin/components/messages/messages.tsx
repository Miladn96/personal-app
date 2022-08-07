import styled from "@emotion/styled";
import { Pagination } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { map } from "rxjs";
import { ItlsMessage } from "../../../../libs/itls-message";
import { round } from "lodash";
import {
  deleteMessageService,
  getMessagesService,
  MessagesModel,
} from "../../../../service/admin";

import './messages.scss'

export const Messages = () => {
  const PER_PAGE = 16;
  const [messages, setMessages] = useState<MessagesModel[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>();

  const getMessages = () => {
    getMessagesService(page, PER_PAGE)
      .pipe(map((res) => res.data))
      .subscribe((data) => {
        setMessages(data?.messages as MessagesModel[]);
        setTotalPage(data?.totalMessages);
      });
  };

  const onDelete = (messageUid: string) => {
    deleteMessageService(messageUid).subscribe((data) => {
      getMessages()
    });
  };

  const pageChange = (evt: ChangeEvent, page: number): void => {
    setPage(page)
  }

  useEffect(() => {
    !(messages === []) && getMessages();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <MessageContainer>
        {messages.map((message) => (
          <ItlsMessage
            key={message.messageUid}
            message={message}
            onDelete={onDelete}
          />
        ))}
      </MessageContainer>
      {totalPage ? (
        <Pagination
          page={page}
          color="primary"
          style={{ marginTop: "10px" }}
          size="small"
          count={round(totalPage / PER_PAGE)}
          onChange={(evt: ChangeEvent<any>, page: number) => pageChange(evt,page)}
        ></Pagination>
      ) : null}
    </div>
  );
};

const MessageContainer = styled.div`
  width: 840px;
  height: 670px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  overflow: auto;
`;
