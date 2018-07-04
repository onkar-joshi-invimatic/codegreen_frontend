import { Task } from './Task';

export class Tasks
{
    private tasks : Array<Task>;
    // private idCounter : number = 0;
    
    constructor()
    {
        this._tasks = new Array<Task>();
    }
    
    /**
    * Get takslist.
    * @return {Task[}} The list of tasks.
    */
    get _tasks() : Array<Task>
    {
        return this.tasks;
    }
    
    /**
    * Set tasklist.
    * @param {Task[]} tasks - The new list of tasks.
    */
    set _tasks(_tasks : Array<Task>)
    { 
        this.tasks = _tasks;
    }
    
    /**
    * Get the amount of tasks.
    * @return {number} The total amount of tasks.
    */
    get _size() : number
    {
        return this._tasks.length;
    }
    
    /**
    * Add a new task to the tasklist.
    * @param {string} description - The description of the new task.
    * @param {string} priority - The priority of the new task.
    * @param {Date} date - The datestring in ISO 8601 of the new task.
    */
    addTask(_id: number, _description : string, _priority : string, _date : Date)
    {
        let newTask = new Task(_id, _description, _priority, _date);
        
        this.tasks.push(newTask);
    }
    
    /**
    * Get a task by its id.
    * @param {number} id - The id of the task.
    * @return {Task} The task that corresponds to the id given.
    */
    getTask(id : number) : Task
    {
        for (let task of this.tasks)
        {
            if (task._id == id) return task;
        }
        
        return null;
    }
    
    getTasksByPriority(priority : string) : Array<Task>
    {
        let tasklist = new Array<Task>();
        
        for (let task of this.tasks)
        {
            if (task._priority == priority) tasklist.push(task);
        }
        
        return tasklist;
    }
    
    removeTaskById(id : number)
    {
        let index = this.tasks.indexOf(this.getTask(id), 0);
        
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }
}
