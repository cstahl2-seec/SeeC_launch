/**
 * RegistrationSystem
 *
 * This is a placeholder implementation that will be expanded to handle Wix
 * registration flows, webhook verification, and mapping Wix payloads to the
 * application's internal user model.
 *
 * TODOs:
 * - Add configuration for API keys / secrets (do NOT commit secrets)
 * - Implement webhook signature verification
 * - Implement methods to normalize Wix user payloads and create/update local users
 */

export class RegistrationSystem {
  constructor(private opts: { debug?: boolean } = {}) {}

  /**
   * Placeholder start method
   */
  public start(): void {
    if (this.opts.debug) {
      // eslint-disable-next-line no-console
      console.log('wix-registration-system: start (placeholder)');
    }
  }
}

export default RegistrationSystem;