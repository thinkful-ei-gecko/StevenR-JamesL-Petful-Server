const { catQueue, requeueCats } = require('../../data/cats');

const catsService = {

  insertCat(newCat) {
    catQueue.enqueue(newCat)
  },

  displayCats() {
    if(catQueue.last === null) {
      requeueCats(catQueue);
    };
    let curr = catQueue.first;
    let cats = [];
    while(curr.next !== null) {
      cats.push(curr.value);
      curr = curr.next;
    };
    return cats;
  },

  adoptCat() {
    if(catQueue.last === null) {
      requeueCats(catQueue);
    };
    return catQueue.dequeue();
  }
  
};

module.exports = catsService;