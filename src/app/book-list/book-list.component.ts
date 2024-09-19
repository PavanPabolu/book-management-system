import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BookModel } from '../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements  OnInit {

  books : BookModel[] = [];
  
  ngOnInit(): void {
    
    let savedbooks = localStorage.getItem('books');

    if(savedbooks)
      this.books = JSON.parse(savedbooks);
  }

  deleteABook(id : number) {
    this.books = this.books.filter(b => b.id != id);

    localStorage.setItem('books', JSON.stringify(this.books));
  }

}
