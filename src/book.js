function createTitle(title) {
  return (`The ${title}`);
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}


function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
    reviews.push(review);
  }
};

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(title, mainCharacter, genre) {
  return {
    title,
    mainCharacter,
    pageCount: calculatePageCount(title),
    genre
}
}

function editBook(title) {
  return title.pageCount *= 0.75;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
