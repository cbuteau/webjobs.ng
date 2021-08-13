
import { FunctionCall } from '@angular/compiler'
import { WorkerProxy } from './WorkerProxy.js'
import { WorkerStates } from './WorkerStates.js'

class ThePool {
    list: Array<WorkerProxy>
    completed: Array<WorkerProxy>
    _boundStateUpdate: Function
  constructor() {
    this.list = [];
    this.completed = [];
    this._boundStateUpdate = this.stateUpdate.bind(this);
  }
  dropoff(worker: WorkerProxy) {
    var myindex = this.list.indexOf(worker);
    this.completed.push(worker);
    this.list.splice(myindex, 1);
  }
  pickup(parameters: object) {
    var worker;
    if (this.completed.length > 0) {
      worker = this.completed.pop();
    }

    if (worker === undefined) {
      // spawn by parameters passed in...
      worker = new WorkerProxy(parameters);
      worker.subscribe('StateChanged', this._boundStateUpdate);
      this.list.push(worker);
    } else {
      worker.restart(parameters);
    }

    return worker;
  }
  stateUpdate(state: WorkerStates, worker: WorkerProxy) {
    if (state === WorkerStates.COMPLETED) {
      this.dropoff(worker);
    }
  }
}

export default new ThePool();