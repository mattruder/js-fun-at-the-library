function shelfBook(title, shelf) {
  if (shelf.length <= 2) {
  return shelf.unshift(title);
  }
}

function unshelfBook(bookTitle, shelf) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      return shelf.splice(i, 1)
    }
  }
}

function listTitles(shelf) {
  var shelfTitles = '';
  for (i = 0; i < shelf.length; i++) {
    if (i < (shelf.length -1)) {
      shelfTitles += shelf[i].title + ", "
    } else {
      shelfTitles += shelf[i].title
    }
  }
  return shelfTitles;
}

function searchShelf(shelf, bookTitle) {
  var titles = [];
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
  return titles.includes(bookTitle);
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
