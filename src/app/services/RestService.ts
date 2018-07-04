import { Injectable } from "@angular/core";
import { Http, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { Task } from "../model/Task";
import { Headers } from '@angular/http';

@Injectable()
export class RestService {
    private resourceUrl = 'http://localhost:8080/api';
    constructor(private http: Http) {}

    getAllTasks(): Observable<any>{
        return this.http.get(this.resourceUrl + '/tasks').map((response) => response.json());
    }

    deleteTask(id) {
        return this.http.delete(this.resourceUrl + '/tasks/' + id, null).map((response) => response);
    }

    addTask(task: Task): Observable<any> {
        let requestHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: requestHeaders });
        let body = JSON.stringify(task);
        return this.http.post(this.resourceUrl + '/tasks', task, options).map((response) => response);
    } 
}