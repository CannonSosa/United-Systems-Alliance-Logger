import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface postBookMark{
  Id: number,
  UserID: number,
  LogID: number
}

export interface getBookMark{
  bookmarkID: number,
  userID: number,
  logID: number
}

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  getAllBmkUrl = "https://localhost:5001/api/Bookmark/GetAllBookmarks";
  addBmkUrl = "https://localhost:5001/api/Bookmark/AddBookmark";
  headers = { headers: new Headers({ 'Content-Type': 'application/json' })};

  constructor(private http: HttpClient) { }


  getUserBookmarks(){
    const headers = { 'content-type': 'application/json'}
    return this.http.get(this.getAllBmkUrl, {'headers': headers});
  }

  addUserBookmarks(bookMark: postBookMark){
    const headers = { 'content-type': 'application/json'}
    console.log(bookMark + "addUser");
    var book = JSON.stringify(bookMark)
    return this.http.post(this.addBmkUrl, book, {'headers': headers}).subscribe((response) =>
    { console.log(response);
    });
  }

}

