const { dogQueue, requeueDogs } = require('../../data/dogs');

const dogsService = {

  displayDogs() {
    if(dogQueue.last === null) {
      requeueDogs(dogQueue);
    };
    let curr = dogQueue.first;
    let dogs = [];
    while(curr) {
      dogs.push(curr.value);
      curr = curr.next;
    };
    return dogs;
  },

  adoptDog() {
    if(dogQueue.last === null) {
      requeuedogs(dogQueue);
    };
    return dogQueue.dequeue();
  }
  
};

module.exports = dogsService;