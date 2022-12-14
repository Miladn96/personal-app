import axios from "axios";
import { Observable, Observer } from "rxjs";
import { APP_MODE, APP_MODES } from "./env";

const rootLocalUrl = "http://localhost:4000/api";
const rootProdUrl = "https://api.milad-nasiri.ir/api";
const rootUrl =
  APP_MODE === APP_MODES.DEVELOPMENT ? rootLocalUrl : rootProdUrl;
const options = {
  headers: {
    Accept: "application/json",
  },
};

export const httpGet = (url: string): Observable<any> => {
  return new Observable((obs: Observer<any>) => {
    axios
      .get(rootUrl + url, options)
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
      .post(rootUrl + url, params, options)
      .then((res: any) => {
        obs.next(res.data);
      })
      .catch((err: any) => {
        obs.error(err);
      });
  });
};

export const httpDelete = (url: string): Observable<any> => {
  return new Observable((obs: Observer<any>) => {
    axios
      .delete(rootUrl + url, options)
      .then((res: any) => {
        obs.next(res);
      })
      .catch((err: any) => {
        obs.error(err);
      });
  });
};

export const httpPut = (url: string): Observable<any> => {
  return new Observable((obs: Observer<any>) => {
    axios
      .put(rootUrl + url, options)
      .then((res: any) => {
        obs.next(res);
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
