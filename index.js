import Book from './modules/book.js';
import UI from './modules/pageRender.js';

const container = document.querySelector('.book-container');
// Event Listener for Add a Book
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const id = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 5);
  // Instantiate Book
  const book = new Book(title, author, id);

  // Display Book in UI
  UI.myBooks = UI.myBooks.concat(book);
  UI.addBook(book);

  // Clear Fields
  UI.clearFields();
});

window.addEventListener('load', UI.displayBooks());

// Event Listener for delete a book

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
    UI.deleteBook(e.target.id);
  }
});

window.addEventListener('DOMContentLoaded', UI.displayBooks());

const add = document.querySelector('#add');
add.addEventListener('click', () => {
  const addbook = document.querySelector('#add-new');
  addbook.classList.add('active');
  const list = document.querySelector('#listbook');
  list.classList.remove('active');
  const contact = document.querySelector('#contact');
  contact.classList.remove('active');
});

const contact = document.querySelector('#contactID');
contact.addEventListener('click', () => {
  const contacts = document.querySelector('#contact');
  contacts.classList.add('active');
  const addbook = document.querySelector('#add-new');
  addbook.classList.remove('active');
  const list = document.querySelector('#listbook');
  list.classList.remove('active');
});

const list = document.querySelector('#list');
list.addEventListener('click', () => {
  document.querySelector('#listbook').classList.add('active');
  const contacts = document.querySelector('#contact');
  contacts.classList.remove('active');
  const addbook = document.querySelector('#add-new');
  addbook.classList.remove('active');
});