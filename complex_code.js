// filename: complex_code.js

// This code demonstrates a complex simulation of a social network
// that allows users to create posts, like posts, and follow other users.

class User {
  constructor(name) {
    this.name = name;
    this.posts = [];
    this.likes = [];
    this.following = [];
  }

  createPost(content) {
    const post = new Post(this, content);
    this.posts.push(post);
    return post;
  }

  likePost(post) {
    post.addLike(this);
    this.likes.push(post);
  }

  followUser(user) {
    this.following.push(user);
  }
}

class Post {
  constructor(user, content) {
    this.user = user;
    this.content = content;
    this.likes = [];
  }

  addLike(user) {
    this.likes.push(user);
  }
}

// Social Network Simulation

// Create users
const john = new User("John");
const sarah = new User("Sarah");
const mike = new User("Mike");

// Create posts
const johnPost1 = john.createPost("Hello everyone!");
const sarahPost1 = sarah.createPost("I love coding!");
const mikePost1 = mike.createPost("Today is a beautiful day");

// John likes Sarah's post
john.likePost(sarahPost1);

// Sarah likes Mike's post
sarah.likePost(mikePost1);

// John follows Sarah and Mike
john.followUser(sarah);
john.followUser(mike);

// List all posts liked by John
console.log("Posts liked by John:");
john.likes.forEach((post) => {
  console.log("Post by:", post.user.name);
  console.log("Content:", post.content);
});

// List all users followed by John
console.log("Users followed by John:");
john.following.forEach((user) => {
  console.log("User:", user.name);
});

// Output:
// Posts liked by John:
// Post by: Sarah
// Content: I love coding!
// Posts liked by John:
// Post by: Mike
// Content: Today is a beautiful day
// Users followed by John:
// User: Sarah
// User: Mike