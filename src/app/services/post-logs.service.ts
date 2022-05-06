import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PostLogsService {
  private url = "https://localhost:5001/api/DatabaseLogs/GetAllDatabaseLogs";
  headers = { headers: new Headers({ 'Content-Type': 'application/json' })};

  constructor(private http: HttpClient) { }

  /** Get All Logs */
  getLogs(){
    const headers = { 'content-type': 'application/json'}
    console.log("get");
    return this.http.get(this.url, {'headers': headers});
  }

  /** Delete Selected Logs */
  deleteLogs(id: any[]){
    const headers = { 'content-type': 'application/json'}
    console.log("https://localhost:5001/api/DatabaseLogs/DeleteDatabaseLog?LogID="+ id);
    for( let i=0; i < id.length; i++){
    this.http.delete("https://localhost:5001/api/DatabaseLogs/DeleteDatabaseLog?LogID="+ id[i], {'headers': headers}).subscribe( (response) =>
    {console.log(response);
    });
    }
   }


}
