export interface NewMessageModel {
  name?: string
  email?: string
  message?: string
  userUid?: string
}

export interface RespNewMessageModel {
  data?: NewMessageModel
  message?: string
  error?: boolean
}
