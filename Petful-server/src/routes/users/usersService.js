const { userQueue, requeueUsers } = require('../../data/users');

const usersService = {

  displayUsers() {
    if(userQueue.last === null) {
      requeueUsers(userQueue)
    }
    let curr = userQueue.first;
    let users = [];
    while(curr) {
      users.push(curr.value);
      curr = curr.next;
    }
    return users;
  },

  dequeueUser() {
    if(userQueue.last === null) {
      requeueUsers(userQueue);
    }
    return userQueue.dequeue();
  }
};

module.exports = usersService;