import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data.service';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
//	slectedFile: File = null;
	
WorkSpace = {
		"name" : "",
		"fileupload" : "",
		"email":"",
		"Password" : "",
		"city" : "",
		"description" : "",
		"startTime" : "",
		"closingTime" : "",
		"number" : "",
		"facebookPageUrl" : "",
		"holiday" : "",
		"noOfRooms":"",
		"workSpacePhonesCollection" : ""
	};
	
  constructor(private Data: DataService,
			  private http:HttpClient) { 
  }
	
	onSave(){
		 this.Data.PostData(this.WorkSpace).subscribe(
			 (response) => {console.log(response)},
			 (error) => {console.log(error)}
	)}//post the data 
    
	
	
//onFileSelected(event){
//	this.slectedFile = <File>event.target.files[0];
//}//upload file
	
//	onUpload(){
//		const fd= new FormData();
//		fd.append('image', this.slectedFile, this.slectedFile.name)
//		this.http.post('',fd, {
//			reportProgress:true,
//			observe:'events'
//		})
//			.subscribe(event =>{
//			if(event.type === HttpEventType.UploadProgress){
//			console.log('Upload progress: ' + Math.round(event.loaded/event.total *100) + '%')
//		    }
//		      else if(event.type ===HttpEventType.Response){
//			          console.log(event);
//					}
//		})
//	}//onUpload()
	
  ngOnInit() {
  }
	
}//end of Export class
