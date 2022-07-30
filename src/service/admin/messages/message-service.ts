import { map, Observable } from "rxjs";
import { httpGet, RespModel } from "../../../utils/http-helper";
import { RespMessageModel } from "./message-model";

const ADMIN_URL = `/admin`;

const NEW_MESSAGE_USER_UID_URL = `${ADMIN_URL}/message/:messageUid`;
const NEW_MESSAGE_URL = `${ADMIN_URL}/messages`;
export const getMessagesService = (
  messageUid?: string
): Observable<RespModel<RespMessageModel>> => {
  if (messageUid) {
    return httpGet(
      NEW_MESSAGE_USER_UID_URL.replace(":messageUid", messageUid)
    ).pipe(map((value: RespModel<RespMessageModel>) => value));
  } else {
    return httpGet(NEW_MESSAGE_URL).pipe(
      map((value: RespModel<RespMessageModel>) => value)
    );
  }
};
