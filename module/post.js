const moongose = require('mongoose');
const post = require("../model/Post")
const Post = moongose.model('Post');

module.exports.addPost = (fullName, postHeading, description) => {
  return new Promise((resolve, reject) => {
    Post.create({ fullName, postHeading, description }).then((response) => {
      return resolve(response);
    });
  });
};


module.exports.getAllPost = ()=> {
    return new Promise((resolve, reject)=> {
        Post.find({}).then((post)=> {
            if(post) {
                return resolve (post)
            }else {
                return reject({
                  message: 'No Posts Found',
                  code: 'PostNotFound',
                });
            }
        })
    })
}