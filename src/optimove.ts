import { _Memo } from '@naturalcycles/js-lib'

export interface OptimoveWebSDKCfg {
  tenantToken: string
  configVersion: string

  /**
   * Set to false to silently disable Optimove.
   * @default true
   */
  enabled?: boolean

  /**
   * @default false
   * Set to true to log debug console messages
   */
  debug?: boolean
}

export class OptimoveWebSDK {
  constructor(cfg: OptimoveWebSDKCfg) {
    this.cfg = {
      enabled: true,
      ...cfg,
    }

    if (!this.cfg.debug) {
      this.log = () => {} // no-op
    }
  }

  public cfg: OptimoveWebSDKCfg

  log(...things: any[]): void {
    console.log('[opt]', ...things)
  }

  @_Memo()
  async init(): Promise<void> {
    if (!this.cfg.enabled) return

    // @ts-ignore
    await import(`./vendor/sdk.js`)

    await new Promise<void>(resolve => {
      window.optimoveSDK.initialize(this.cfg.tenantToken, this.cfg.configVersion, resolve, 'info')
    })

    this.log(`websdk initialized`)
  }

  async registerUser(accountId: string, email: string): Promise<void> {
    if (!this.cfg.enabled) return
    await this.init()

    window.optimoveSDK.API.registerUser(accountId, email)

    this.log('registerUser', { accountId, email: !!email })
  }

  async setUserId(accountId: string): Promise<void> {
    if (!this.cfg.enabled) return
    await this.init()

    window.optimoveSDK.API.setUserId(accountId)

    this.log(`setUserId ${accountId}`)
  }

  async setPageVisit(
    url: string = location.href,
    pageTitle: string = document.title,
    pageCategory: string = 'default',
  ): Promise<void> {
    if (!this.cfg.enabled) return
    await this.init()

    window.optimoveSDK.API.setPageVisit(url, pageTitle, pageCategory)

    this.log(`setPageVisit`, {
      url,
      pageTitle,
      pageCategory,
    })
  }

  async reportEvent(event: string, params: { [k: string]: any } = {}): Promise<void> {
    if (!this.cfg.enabled) return
    await this.init()

    window.optimoveSDK.API.reportEvent(event, params)

    this.log(`reportEvent ${event}`, params)
  }
}
