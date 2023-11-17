/* 
Filename: complexCode.js
Description: This code implements a complex task scheduler with multiple functions and event listeners.
*/

// TaskScheduler constructor function
function TaskScheduler() {
  this.tasks = [];
  this.completedTasks = [];
}

// Add a task to the scheduler
TaskScheduler.prototype.addTask = function(task) {
  this.tasks.push(task);
};

// Remove a task from the scheduler
TaskScheduler.prototype.removeTask = function(task) {
  const taskIndex = this.tasks.indexOf(task);
  if (taskIndex !== -1) {
    this.tasks.splice(taskIndex, 1);
  }
};

// Mark a task as completed
TaskScheduler.prototype.completeTask = function(task) {
  const taskIndex = this.tasks.indexOf(task);
  if (taskIndex !== -1) {
    const completedTask = this.tasks.splice(taskIndex, 1)[0];
    this.completedTasks.push(completedTask);
  }
};

// Function to create a task
function createTask(name, description) {
  return {
    name: name,
    description: description,
    completed: false
  };
}

// Instantiate the task scheduler
const scheduler = new TaskScheduler();

// Create tasks and add them to the scheduler
const task1 = createTask("Task 1", "This is the first task");
const task2 = createTask("Task 2", "This is the second task");
scheduler.addTask(task1);
scheduler.addTask(task2);

// Event listener for marking a task as completed
document.getElementById("complete-task-button").addEventListener("click", function() {
  scheduler.completeTask(task1);
  console.log("Task 1 marked as completed");
});

// Event listener for removing a task
document.getElementById("remove-task-button").addEventListener("click", function() {
  scheduler.removeTask(task2);
  console.log("Task 2 removed from the scheduler");
});

// Display scheduler's tasks
console.log("Tasks in scheduler:", scheduler.tasks);
console.log("Completed tasks:", scheduler.completedTasks);

// Start the task scheduler
scheduler.start();

// Complex code continues...

// More functions and logic to demonstrate complexity
// ...
// ...

// End of complex code.