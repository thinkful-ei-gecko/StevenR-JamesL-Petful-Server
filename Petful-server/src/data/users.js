const Queue = require('./queue');

const users = [
  { name: 'James' },
  { name: 'Steven' },
  { name: 'Alice' },
  { name: 'Jenny' },
  { name: 'Bill' },
  { name: 'You' },
  { name: 'Chris' },
  { name: 'Karly' },
]

setInterval(_resetUsers, 45000)


let userQueue = new Queue()

function requeueUsers(queue) {
  for(let i=0; i<=users.length; i++) {
    queue.enqueue(users[i])
  }
}

function _resetUsers() {
  let currNode = userQueue.first
  while(currNode !== null) {
    userQueue.dequeue()
    currNode = currNode.next
  }
  for(let i=0; i<=users.length; i++) {
    return userQueue.enqueue(users[i])
  }
}

// initial queue of users
for(let i=0; i<=users.length; i++) {
  userQueue.enqueue(users[i])
}


module.exports = {
  userQueue,
  requeueUsers,
  users
}