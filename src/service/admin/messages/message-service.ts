import { map, Observable } from "rxjs";
import { httpDelete, httpGet, RespModel } from "../../../utils/http-helper";
import { MessagesModel, RespMessageModel } from "./message-model";

const ADMIN_URL = `/admin`;

// const NEW_MESSAGE_USER_UID_URL = `${ADMIN_URL}/message/:messageUid`;
const NEW_MESSAGE_URL = `${ADMIN_URL}/messages`;

export const getMessagesService = (
  pageNumber?: number,
  perPage?: number,
): Observable<RespModel<RespMessageModel>> => {
    return httpGet(`${NEW_MESSAGE_URL}?pageNumber=${pageNumber}&perPage=${perPage}`).pipe(
      map((value: RespModel<RespMessageModel>) => value)
    );
};

const DELETE_MESSAGE_URL = `${ADMIN_URL}/message/:messageUid`;

export const deleteMessageService = (
  messageUid: string
): Observable<MessagesModel> => {
  return httpDelete(DELETE_MESSAGE_URL.replace(":messageUid", messageUid)).pipe(
    map((value: any) => value.data.data)
  );
};
