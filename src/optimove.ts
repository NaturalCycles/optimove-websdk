import { _Memo, _snakeCase } from '@naturalcycles/js-lib'
import { optimoveSDK } from './vendor/sdk'

export interface OptimoveWebSDKCfg {
  tenantToken: string
  configVersion: string

  /**
   * Set to false to silently disable Optimove.
   *
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

    await new Promise<void>(resolve => {
      optimoveSDK.initialize(this.cfg.tenantToken, this.cfg.configVersion, resolve, 'info')
    })

    this.log(`websdk initialized`)
  }

  async registerUser(accountId: string, email: string): Promise<void> {
    if (!this.cfg.enabled) return
    await this.init()

    this.log('registerUser', { accountId, email: !!email })

    optimoveSDK.API.registerUser(accountId, email)
  }

  async setUserId(accountId: string): Promise<void> {
    if (!this.cfg.enabled) return
    await this.init()

    this.log(`setUserId ${accountId}`)

    optimoveSDK.API.setUserId(accountId)
  }

  async setPageVisit(
    url: string = location.href,
    pageTitle: string = document.title,
    pageCategory: string = 'default',
  ): Promise<void> {
    if (!this.cfg.enabled) return
    await this.init()

    this.log(`setPageVisit`, {
      url,
      pageTitle,
      pageCategory,
    })

    optimoveSDK.API.setPageVisit(url, pageTitle, pageCategory)
  }

  async reportEvent(event: string, params: { [k: string]: any } = {}): Promise<void> {
    if (!this.cfg.enabled) return
    await this.init()

    const eventSnake = _snakeCase(event)
    const paramsSnake = {}
    Object.entries(params).forEach(([k, v]) => {
      paramsSnake[_snakeCase(k)] = v
    })

    this.log(`reportEvent ${eventSnake}`, paramsSnake)

    optimoveSDK.API.reportEvent(eventSnake, paramsSnake)
  }
}
