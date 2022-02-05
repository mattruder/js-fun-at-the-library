
function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  if (book.genre === 'fantasy') {library.shelves.fantasy.push(book); }
  else if (book.genre === 'fiction') {library.shelves.fiction.push(book); }
  else if (book.genre === 'nonFiction') {library.shelves.nonFiction.push(book); }
}

function checkoutBook(library, book) {
  notification = '';
  function findBook(shelf) {
    for (i = 0; i < shelf.length; i++) {
      if (shelf[i].title.includes(book)) {
        shelf.splice(i, 1);
        notification += 'we have this book';
      }
    }
  }

  findBook(library.shelves.fantasy);
  findBook(library.shelves.fiction);
  findBook(library.shelves.nonFiction);
    if (notification) {
      return `You have now checked out ${book} from the ${library.name}`;
    } else {
      return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
    }

}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
