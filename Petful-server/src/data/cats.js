const Queue = require('./queue');

let catQueue = new Queue()

const cats = [
  {
    imageURL: 'https://vetstreet.brightspotcdn.com/dims4/default/a51a531/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fbb%2F4f%2F1be8e8224f729a54b6a9d8c7cbd7%2FAmerican-Bobtail-AP-1J40QF-645sm3614.jpg',
    imageDesc: 'Grey cat walking',
    name: 'JerDaniel',
    sex: 'M',
    age: 2,
    breed: 'Bobtail',
    story: 'Found in a box near the side of the road'
  },
  {
    imageURL: 'https://kittywise.com/wp-content/uploads/2019/04/Bombay-Cat.jpeg',
    imageDesc: 'Black cat sitting in the grass',
    name: 'Paul',
    sex: 'M',
    age: 1,
    breed: 'Bombay',
    story: 'Owner has too many cats.'
  },
  {
    imageURL: 'http://geniusvets.s3.amazonaws.com/gv-cat-breeds/American-Shorthair-1.jpg',
    imageDesc: 'Grey cat looking deep inside your soul',
    name: 'Ashy',
    sex: 'F',
    age: 4,
    breed: 'Shorthair',
    story: 'Cat given up for staring too much'
  },
  {
    imageURL: 'https://dbw4iivs1kce3.cloudfront.net/680x/2017/01/Bengal-neige.jpg',
    imageDesc: 'Spotted cat playing in the snow',
    name: 'Bennie',
    sex: 'F',
    age: 3,
    breed: 'Bengal',
    story: 'Owner passed away'
  }
]

function requeueCats(queue) {
  for(let i=0; i<cats.length; i++) {
    queue.enqueue(cats[i])
  }
}

function _resetCats() {
  let currNode = catQueue.first
  while(currNode !== null) {
    catQueue.dequeue()
    currNode = currNode.next
  }
  for(let i=0; i<cats.length; i++) {
    catQueue.enqueue(cats[i])
  }
}

//initial queue of cats
for(let i=0; i<cats.length; i++) {
  catQueue.enqueue(cats[i])
}

setInterval(_resetCats, 45000)

module.exports = {
  cats,
  catQueue,
  requeueCats
}