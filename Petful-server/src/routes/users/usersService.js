const { userQueue, requeueUsers } = require('../../data/users');

const usersService = {

  // enqueueUser(user) {
  //   userQueue.enqueue(user)
  // },

  displayUsers() {
    let curr = userQueue.first;
    let users = [];
    if(userQueue.last === null) {
      requeueUsers(userQueue)
    }
    while(curr.next !== null) {
      users.push(curr.value);
      curr = curr.next;
    }
    return users;
  },

  dequeueUser() {
    if(userQueue.last === null) {
      requeueUsers(userQueue)
    }
    return userQueue.dequeue();
  }
};

module.exports = usersService;