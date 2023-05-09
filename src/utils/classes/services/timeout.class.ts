/**
 * Utility class service that creates and removes timeouts
 */
export class Timeout {
  private static id: number;
  private static arrayOfIds: number[];

  constructor() {}

  /**
   * Sets a timeout with a callback function and the duration in milliseconds
   *
   * **Has to be assigned to a variable**
   *
   * Example:
   * ```js
   * const timeoutCreator = new Timeout();
   *
   * let firstTimeout = timeoutCreator.set(()=>{...}, 10_000);
   *  ```
   *    */
  static set(callbackFunction: Function, milliseconds: number) {
    //@ts-ignore The setTimeout returns a number
    this.id = setTimeout(() => {
      callbackFunction();
    }, milliseconds);

    this.arrayOfIds.push(this.id);

    return this.id;
  }

  /**
   * Removes the timeout by its id
   *
   * **The id is the variable in which the timeout has been assigned to**
   *
   * Here's an example:
   * ```js
   * const timeoutCreator = new Timeout();
   *
   * let firstTimeout = timeoutCreator.set(()=>{...}, 10_000);
   *
   * timeoutCreator.clear(firstTimeout)
   * ```
   */
  static clear(id: number) {
    const actualId: number = this.arrayOfIds.filter((idNumber: number) => {
      return idNumber === id;
    })[0];

    clearTimeout(actualId);

    this.arrayOfIds = this.arrayOfIds.filter((idNumber: number) => {
      return idNumber !== actualId;
    });
  }
}
