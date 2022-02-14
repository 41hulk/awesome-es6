const container = document.querySelector('.book-container');
export default class UI {
  static myBooks = [];

  static addBook = (book) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('single-book');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const text = document.createElement('h2');
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('delete');
    h2.textContent = book.title;
    h3.textContent = book.author;
    text.textContent = 'by';
    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('id', book.id);
    bookDiv.appendChild(h2);
    bookDiv.appendChild(text);
    bookDiv.appendChild(h3);
    bookDiv.appendChild(removeBtn);
    container.appendChild(bookDiv);

    const bookJson = JSON.stringify(UI.myBooks);
    localStorage.setItem('books', bookJson);
  }

   static deleteBook = (bookId) => {
     const myBooks = UI.myBooks.filter((book) => book.id !== bookId);
     localStorage.setItem('books', JSON.stringify(myBooks));
   }

  static displayBooks = () => {
    /* eslint-disable no-undef */
    const currentDate = luxon.DateTime.local().toLocaleString(
      luxon.DateTime.DATETIME_FULL,
    );
    document.querySelector('.date').innerHTML = currentDate;
    if (localStorage.getItem('books') === null) {
      UI.myBooks = [];
    } else {
      UI.myBooks = JSON.parse(localStorage.getItem('books'));
    }
    UI.myBooks.forEach((element) => {
      UI.addBook(element);
    });
  }

  static clearFields = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}