const Queue = require('./queue');

let userQueue = new Queue()

const users = [
  { name: 'James' },
  { name: 'Steven' },
  { name: 'Alice' },
  { name: 'Jenny' },
  { name: 'Bill' },
  { name: 'Maria' },
]

function requeueUsers(queue) {
  for(let i=0; i<users.length; i++) {
    queue.enqueue(users[i])
  }
}

function _resetUsers() {
  let currNode = userQueue.first
  while(currNode !== null) {
    userQueue.dequeue()
    currNode = currNode.next
  }
  for(let i=0; i<users.length; i++) {
    userQueue.enqueue(users[i])
  }
}

//initial queue of users
for(let i=0; i<users.length; i++) {
  userQueue.enqueue(users[i])
}
setInterval(_resetUsers, 45000)

module.exports = {
  userQueue,
  users,
  requeueUsers
}