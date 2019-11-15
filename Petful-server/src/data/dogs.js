const Queue = require('./queue');

let dogQueue = new Queue()

const dogs = [
  {
    imageURL: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/03172411/Australian-Shepherd-Care1.jpg',
    imageDesc: 'An Aussie running around',
    name: 'Snoop',
    sex: 'M',
    age: 3,
    breed: 'Australian Shepherd',
    story: 'Need larger home'
  },
  {
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0hVQz__o40Um-aqkbJC1oEm0F5F44iB3nqjOg2fvdpk_JBwkq',
    imageDesc: 'Sleeping bulldog',
    name: 'Princess',
    sex: 'F',
    age: 5,
    breed: 'Bulldog',
    story: 'Junkyard guard dog'
  },
  {
    imageURL: 'https://www.dogbreedslist.info/uploads/allimg/dog-pictures/Shiba-Inu-2.jpg',
    imageDesc: 'Shiba Inu wearing a hat',
    name: 'Roscoe',
    sex: 'M',
    age: 2,
    breed: 'Shiba Inu',
    story: 'Ran away from breeder'
  },
  {
    imageURL: 'https://vetstreet.brightspotcdn.com/dims4/default/d742db0/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F98%2Fd98250a0d311e0a2380050568d634f%2Ffile%2FGolden-Retriever-3-645mk062411.jpg',
    imageDesc: 'Gold dog laying in the grass',
    name: 'Shadow',
    sex: 'M',
    age: 2,
    breed: 'Golden Retreiver',
    story: 'Found abandoned at vacant home'
  }
]

function requeueDogs(queue) {
  for(let i=0; i<dogs.length; i++) {
    queue.enqueue(dogs[i])
  }
}

function _resetDogs() {
  let currNode = dogQueue.first
  while(currNode !== null) {
    dogQueue.dequeue()
    currNode = currNode.next
  }
  for(let i=0; i<dogs.length; i++) {
    dogQueue.enqueue(dogs[i])
  }
}

//initial queue of dogs
for(let i=0; i<dogs.length; i++) {
  dogQueue.enqueue(dogs[i])
}

setInterval(_resetDogs, 45000)

module.exports = {
  dogs,
  dogQueue,
  requeueDogs
}