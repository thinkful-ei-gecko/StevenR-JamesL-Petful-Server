const { catQueue, requeueCats } = require('../../data/cats');

const catsService = {

  displayCats() {
    if(catQueue.last === null) {
      requeueCats(catQueue);
    };
    let curr = catQueue.first;
    let cats = [];
    while(curr) {
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