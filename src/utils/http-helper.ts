import axios from "axios";
import { Observable, Observer } from "rxjs";

const rootUrl = "http://api.milad-nasiri.ir/api";

export const httpGet = (url: string): Observable<any> => {
  return new Observable((obs: Observer<any>) => {
    axios
      .get(rootUrl + url, {
        headers: {
          "Accept": "application/json",
        },
      })
      .then((res: any) => {
        obs.next(res.data);
      })
      .catch((err: any) => {
        obs.error(err);
      });
  });
};

export const httpPost = (url: string, params: any): Observable<any> => {
  return new Observable((obs: Observer<any>) => {
    axios
      .post(rootUrl + url, params, {
        headers: {
          "Accept": "application/json",
        },
      })
      .then((res: any) => {
        obs.next(res.data);
      })
      .catch((err: any) => {
        obs.error(err);
      });
  });
};

export interface RespModel<T> {
  data?: T;
  message?: string;
  error?: boolean;
}
