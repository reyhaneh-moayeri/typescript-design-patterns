import Reports from "./reports";

export default class Wallet {
  static instance: Wallet;
  private wallets: { [id: string]: number } = {};
  private reports = new Reports();

  constructor() {
    if (Wallet.instance) {
      return Wallet.instance;
    } else {
      Wallet.instance = this;
    }
  }

  createWallet(userId: string): boolean {
    if (userId in this.wallets) {
      this.wallets[userId] = 0;
      this.reports.logEvent(`wallet for '${userId}' created and set to 0`);
      return true;
    }
    return false;
  }

  getBalance(userId: string): number {
    this.reports.logEvent(
      `Balance check for '${userId}' = ${this.wallets[userId]}`
    );
    return this.wallets[userId];
  }

  adjustBalance(userId: string, amount: number): number {
    this.wallets[userId] += amount;
    this.reports.logEvent(
      `Adjusted balance for '${userId}' by ${amount} to ${this.wallets[userId]}`
    );
    return this.wallets[userId];
  }
}
