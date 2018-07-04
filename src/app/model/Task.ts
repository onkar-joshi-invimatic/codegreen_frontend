
/** Class representing a Task */
export class Task
{
    private id : number;
    private description : string;
    private priority : string;
    private date : Date;
    
    constructor(_id : number = -1, _description : string = "A new task." , _priority : string, _date : Date = new Date())
    {
        this._id = _id;
        this._description = _description;
        this._priority = _priority;
        this._date = _date;
    }
    
    /**
    * Get the id of the Task.
    * @return {number} The Tasks id.
    */
    get _id() : number
    {
        return this.id;        
    }
    
    /**
    * Sets the id of the Tasks.
    * @param {string} id - The new id value.
    */
    set _id(_id : number)
    {
        if (typeof _id === 'undefined')
        {
            throw new Error("Task id is invalid");
        }
        
        this.id = _id;
    }
    
    /**
    * Get the description of the Task.
    * @return {string} The Tasks description.
    */
    get _description() : string 
    {
        return this.description;
    }
    
    /**
    * Set the description of the Task.
    * @param {string} description - The new description.
    */
    set _description(_description : string)
    {
        this.description = _description;
    }
    
    /**
    * Get the priority or the Task.
    * @return {Priority} The Tasks priority.
    */
    get _priority() : string
    {
        return this.priority;
    }
    
    /**
    * Set the priority of the Task.
    * @param {string} priority - The new prority.
    */
    set _priority(_priority : string)
    {
        this.priority = _priority;
    }
    
    /**
    * Get the creation date of the Task.
    * @return {Date} the date.
    */
    get _date() : Date
    {
        return this.date;
    }
    
    /**
    * Set the creation date of the Task.
    * @param {Date} date - The new creation date.
    */
    set _date(_date : Date)
    {
        this.date = _date;
    }
}