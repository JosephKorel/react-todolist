class TaskObject {
  static lastId = 0;
  constructor(item) {
    this.id = TaskObject.lastId + Math.random();
    this.text = item;
    this.done = false;
  }
}

export default TaskObject;
