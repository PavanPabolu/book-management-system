import { Component } from '@angular/core';
import { BookModel } from '../models/book.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  //for two-way data binding
  newtitle : string = "";
  newauthor : string = "";

  books : BookModel[] = [];

  ngOnInit(): void {
    let savedbooks = localStorage.getItem('books');

    if(savedbooks)
      this.books = JSON.parse(savedbooks);
  }

  addNewBook() : void {

    if(this.newtitle.trim().length && this.newauthor.trim().length){
      let newbook : BookModel = {
        //id : this.books.length + 1,
        id : Date.now(),
        title : this.newtitle,
        author : this.newauthor
      }
      this.books.push(newbook);
      
      this.newtitle = "";
      this.newauthor = "";
    }    
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  

  deleteABook(id : number) {
    this.books = this.books.filter(b => b.id != id);

    localStorage.setItem('books', JSON.stringify(this.books));
  }

}
