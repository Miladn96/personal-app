export interface RespMessageModel {
  messages?: MessagesModel;
  page?: number;
  totalMessages?: number;
}

export interface MessagesModel {
  name?: string;
  email?: string;
  message?: string;
  userUid?: string;
  messageUid?: string;
};
