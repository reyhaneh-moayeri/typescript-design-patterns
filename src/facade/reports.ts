// singleton
export default class Reports {
  static instance: Reports;
  private rowID = 0;
  private reports: { [id: string]: [number, string] } = {};

  constructor() {
    if (Reports.instance) {
      return Reports.instance;
    } else {
      Reports.instance = this;
    }
  }

  getHistory(): { [id: string]: [number, string] } {
    return this.reports;
  }
  logEvent(event: string) {
    this.reports[this.rowID] = [Date.now(), event];
    this.rowID += 1;
    return true;
  }
}
