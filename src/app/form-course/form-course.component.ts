import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.scss']
})
export class FormCourseComponent implements OnInit {
	server = {
		"Course" : "",
		"description" : "",
		"endDate" : "",
		"startDate" : "",
		"cost":"",
		"durationHours":"",
		"name":"",
		"noOfApplicant":""
         	};
	
  constructor(private Data:DataService,
              private CategoryService:CategoryService) { }
			  categories: Array<Category> = []
			  
	 postCourse(){
		 this.Data.formCrs(this.server).subscribe(
			 (response) => {console.log(response)},
			 (error) => {console.log(error)}
	)}//post the data 
	
	
	
  ngOnInit() {
	this.CategoryService.GetCategories().subscribe((cats: Array<Category>) => {
		cats.forEach(c => this.categories.push(c))
		console.log(cats)
	  }, err => {
		// console.log("categotries")
		console.log(err)
		// work service local
		
	  }
	  )
  }

}
