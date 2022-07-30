import { map, Observable } from "rxjs";
import { httpPost } from "../../utils/http-helper";
import { NewMessageModel, RespNewMessageModel } from "./contact-us-model";

const ABOUT_URL = `/about`

const NEW_MESSAGE_USER_UID_URL = `${ABOUT_URL}/send-message/:userUid`;
const NEW_MESSAGE_URL = `${ABOUT_URL}/send-message`;
export const newMessage = (
  data: NewMessageModel
): Observable<RespNewMessageModel> => {
  const { userUid } = data;
  if (userUid) {
    return httpPost(NEW_MESSAGE_USER_UID_URL.replace(':userUid',userUid), data).pipe(
      map((value: RespNewMessageModel) => value)
    );
  } else {
    return httpPost(NEW_MESSAGE_URL, data).pipe(
      map((value: RespNewMessageModel) => value)
    );
  }
};
