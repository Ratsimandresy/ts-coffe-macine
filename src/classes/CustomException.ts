export class TooManySugarsException extends Error {
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, TooManySugarsException.prototype);
    }
}