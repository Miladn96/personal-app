export enum APP_MODES {
  DEVELOPMENT = "DEVELOPMENT",
  PRODUCTION = "PRODUCTION",
}
export const APP_MODE =
  document.location.hostname === "localhost"
    ? APP_MODES.DEVELOPMENT
    : APP_MODES.PRODUCTION;
