// https://github.com/optimove-tech/Web-SDK-Integration-Guide
export interface OptimoveSDK {
  initialize(
    tenantToken: string,
    configVersion: string,
    cb: Function,
    logLevel: 'info' | string,
  ): void

  API: {
    registerUser(accountId: string, email: string): void

    setUserId(accountId: string): void

    setPageVisit(url: string, pageTitle: string, pageCategory: string): void

    reportEvent(event: string, params: { [k: string]: any }): void
  }
}

// Currently it was decided to not expose it via window.*
// declare global {
//   interface Window {
//     optimoveSDK: OptimoveSDK
//   }
// }
