import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  GetCategories(){
    return this.http.get("../assets/categorySignin.json");
  }

  GetCategoriesById(id:number){
    return this.http.get("../assets/categorySignin.json" +id);
  }

  // GetProjectsinCategory(category:string){

  //   return this.http.get('../assets/categorySignin.json' + category)
  // }//hena hwa yadiny al link bta3 al haga ally hd5ol 3leha 
}
