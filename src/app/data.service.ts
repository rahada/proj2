import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }
	
	PostData(WorkSpace:object) {
    return this.http.post('http://172.16.5.184:3000/workspace/add', WorkSpace);
  }
	
	getData(path: string): Observable<any> {
     return this.http.get(path);
  }
	
	getAdmin(path:string) : Observable<any>{
    return this.http.get(path);
  }
	
	courseJson(path: string): Observable<any> {
     return this.http.get(path);
	}//json file course
	
	instructorJson(path: string): Observable<any> {
     return this.http.get(path);
	}//json file course
	
	formCrs(server:object) {
    return this.http.post('', server);
  }

  instAdmin(path: string): Observable<any> {
    return this.http.get(path);
 }

 wrkspaceAdmin(path: string): Observable<any> {
  return this.http.get(path);
}

crsAdmin(path: string): Observable<any> {
  return this.http.get(path);
}

}
