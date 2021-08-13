import { prototype } from "events"


export class PendingPromise {
    constructor() {
        let ptr = this;
        this._promise = new Promise((resolve, reject) => {
            ptr.resolve = resolve;
            ptr.reject = reject;
        })
    }
}